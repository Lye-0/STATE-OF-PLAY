/** Pure shared export model. The UI, ZIP modal and CLI use these same functions. */
import { FORMATS, LAYOUTS, type Format, type Layout, type Part, type SourceFile } from './types.ts';
import { archiveTree, validateArchiveEntries, type ArchiveEntry } from '../shared/archive.ts';
export interface Delivery {
  layout: Layout; format: Format; files: readonly SourceFile[];
  componentRoot: string; entry: string; stylesheet: string; markup: string; example: string;
  runtimeFiles: readonly SourceFile[]; externalDependencies: readonly string[];
}
const requiredFile = (files: readonly SourceFile[], predicate: (f: SourceFile)=>boolean, label: string): SourceFile => {
  const found = files.find(predicate); if (!found) throw new Error(`Export is missing ${label}`); return found;
};
export function getDelivery(part: Part, format: Format, layout: Layout = 'portable'): Delivery {
  const files = (layout === 'portable' ? part.portableFiles : part.files)[format];
  const react = format === 'tsx' || format === 'jsx';
  const entry = requiredFile(files, f => react ? f.sourceName.endsWith(`/react/${part.componentName}.tsx`) : f.sourceName.endsWith('/vanilla/init.ts'), 'entry').name;
  return {layout, format, files, entry,
    componentRoot: layout === 'portable' ? entry.split('/')[0] : 'src',
    stylesheet: requiredFile(files,f=>f.sourceName.endsWith('/styles.css'),'stylesheet').name,
    markup: requiredFile(files,f=>f.sourceName.endsWith('/markup.html'),'markup').name,
    example: requiredFile(files,f=>react ? f.sourceName.endsWith('/react/Example.tsx') : f.sourceName.endsWith('/vanilla/main.ts'),'example').name,
    runtimeFiles: files.filter(f=>f.group!=='example'), externalDependencies: react ? ['react (18+)'] : []};
}
export function packageRoot(part: Part, format: Format, layout: Layout): string { return `${part.id}-${format}-${layout}`; }
const fence = (code: string, language = '') => {
  const runs = [...code.matchAll(/`+/g)].map(m=>m[0].length);
  const ticks = '`'.repeat(Math.max(3,...runs.map(n=>n+1)));
  return `${ticks}${language}\n${code.trimEnd()}\n${ticks}`;
};
export function placementText(delivery: Delivery): string {
  return delivery.layout === 'portable'
    ? `${delivery.componentRoot}/ をフォルダーごと、既存のコンポーネント置き場へ配置します。internal/ はこのパーツ専用です。examples/ と preview/ はアプリへ取り込む必要はありません。`
    : '元の構成を参照・比較できます。導入する場合は src/ 全体をパーツ専用のサブフォルダーへ置くか、参照先を更新して既存の構成へ合わせます。既存の src/shared/ へ無条件に上書きしないでください。';
}
export function buildUsage(part: Part, format: Format, layout: Layout): string {
  const d=getDelivery(part,format,layout), react=format==='tsx'||format==='jsx';
  const files=d.files.map(f=>f.name);
  return `# ${part.name} / ${part.version}\n\n${part.description}\n\n`+
    `## 今回の配布\n- 形式: ${FORMATS[format].label}\n- 構成: ${LAYOUTS[layout].label}\n- コピーする本体: \`${d.componentRoot}/\`\n- 入口: \`${d.entry}\`\n- スタイル: \`${d.stylesheet}\`\n- 使用例: \`${d.example}\`\n- 実行時外部依存: ${d.externalDependencies.join(', ')||'なし'}\n\n`+
    `## 導入手順\n1. 対象アプリの構成・設定・既存の配置規約を確認します。\n2. ${placementText(d)}\n3. ${react ? `既存の画面から ${part.componentName} をimportして使います。CSSはコンポーネント内から読み込みます。JSX/TSXを変換できるReact環境が必要です。` : `\`${d.markup}\` の要素とCSSを配置し、init(element, options)で初期化します。返されたcontrollerは取り外す前にdestroy()します。${format==='ts'?'TypeScriptをビルドする環境が必要です。':'JS版はES Modulesです。HTTPのローカルサーバーから開いてください。'}`}\n4. 使用例は接続例です。既存のApp・main・index・設定ファイルを上書きしないでください。移動した使用例のimportも新しい場所に合わせます。\n5. 型チェック・ビルド・操作確認を行います。Next.js等のSSR環境ではクライアント境界とCSSの読み込み規則も確認します。\n\n`+
    `## 配置について\n配布パスは利用先への固定命令ではありません。\`${d.componentRoot}/\` を別の場所にまとめて移す場合、内部の相対参照は維持されます。内部を分割・改名する場合は、import/export、CSS・素材の参照、使用例をすべて更新してください。\n\n`+
    `## 複数パーツ・更新時\nパーツ専用のinternal/は意図的な分離です。同名だからと共通化・上書きしないでください。既存パーツがある場合はバージョンと差分を確認し、手元の修正を保って更新します。INTEGRATION.jsonは元パスと配布パスの対応・入口・用途・外部依存を記録するもので、自動インストーラーではありません。\n\n`+
    `## ファイル構成\n${fence(archiveTree(files),'text')}\n\n## パーツ固有の補足\n${part.usage.trim()}\n\n`+
    `## 確認用デモ\npreview/index.html は独立した確認用です。preview/全体を開けば元のデモを確認できます。配布したパーツ本体は、そのままのソースを使って別途検証してください。\n\n## コピーと保存\n画面のファイルパス・ソース・ZIPは同じ構成です。個別保存はファイル名のみ。フォルダーごと取り込む場合はZIPを使います。テキスト保管版では末尾の.txtを戻すまで動作しません。\n`;
}
/** Invariant across every part and layout: adapt integration, not the visual design. */
export const INTEGRATION_RULES = `## 既存プロジェクトへの組み込みルール
1. 作業前にリポジトリ内のAGENTS.md等の指示、対象アプリ、package.json、使用中のロックファイル、TypeScript/ビルド設定、コンポーネント配置、CSSの読み込み方を確認する。モノレポでは導入対象のアプリを特定する。
2. プロジェクトを参照できない場合は構成を推測で確定しない。必要最小限のディレクトリツリー・設定・使用箇所の提示を求める。秘密情報を含む.envや認証情報は要求しない。
3. 配布パスは元データの識別子であり、利用先にも同じ階層を作る要求ではない。原則はパーツ本体と専用補助処理を1フォルダーにまとめて既存の配置規約へ合わせる。明確な規約がなければ専用の名前空間を使い、作業前に実際の配置対応を示す。
4. 移動・改名する場合はimport/export（型・動的importを含む）、CSS/画像/SVG等の参照、使用例を同時に更新する。未設定の@/等のエイリアス、別アプリのsrcルートを勝手に前提にしない。通常ブラウザーJSでは.jsの拡張子を保つ。
5. 元の形状・色・素材・陰影・アニメーション・操作・公開API・アクセシビリティを維持する。配置を変えるために一般的な別UIへ置換しない。変更可能なのは配置・接続と、利用者が求めたラベルや状態等に限定する。
6. 既存ファイル、アプリ入口、CSSリセット、設定、ロックファイルを無条件に上書きしない。examples/・preview/は参考用であり既存のAppやmainへの置換指示ではない。既存に同じパーツがある場合は新規複製よりバージョン・差分とローカル修正を確認して更新する。
7. 同名のshared/internalファイルを名前だけで共通化しない。内容・バージョン・依存関係が一致する場合だけ検討する。既存パーツを壊さないことを優先し、サードパーティの追加や大きな更新は必要性を確認する。使用中のパッケージマネージャーを尊重する。
8. Reactでは外部制御/内部制御、無効状態、複数配置、SSRのクライアント境界、CSSの扱いを確認する。通常DOMでは対象要素単位で初期化し、取り外す際にdestroy()でRAF/Observer/イベントを解除する。必要ファイルが欠ける場合は、推測の代用品を作らず不足を明示する。
9. 最後に実際の配置・呼び出し例・必要な依存・変更点を示す。型チェック、ビルド、クリック/ドラッグ/キーボード、縮小モーション、同時配置と取り外しを検証し、実行できない確認は未確認として明示する。`;
export function buildPrompt(part: Part, format: Format, layout: Layout, includeCode = true): string {
  const d=getDelivery(part,format,layout);
  return `# ${part.name} を既存プロジェクトに組み込む\n\n参照: STATE OF PLAY / ${part.id} / v${part.version}\n出力形式: ${FORMATS[format].label}\n配布構成: ${LAYOUTS[layout].label} (${layout})\n\n${INTEGRATION_RULES}\n\n## 配置の起点\n${placementText(d)}\n入口: ${d.entry}\n外部依存: ${d.externalDependencies.join(', ')||'なし'}\n\n## 固有の再現仕様\n${part.prompt.trim()}\n\n## 利用方法\n${buildUsage(part,format,layout)}`+
    (includeCode ? '\n\n## 正本のソースコード\n見出しは配布ルートからの相対パスです。共通処理も含みます。参照実装は外観・動作の正本ですが、配置は上記ルールに従って適応させます。\n'+
      d.files.map(f=>`\n### ${f.name}\n用途: ${f.group==='example'?'参考用の使用例（アプリ入口に上書きしない）':f.group==='shared'?'本体が必要とする補助処理':'パーツ本体'}\n${fence(f.code,f.language)}`).join('\n') :
      '\n\n## 文章のみの再現について\nソース本文はこの形式には含みません。完全一致は保証できません。参照コードを利用可能なら確認し、寸法・素材・ON/OFF・ホバー途中を比較してください。\n');
}
export function buildManifest(part: Part, format: Format, layout: Layout): string {
  const d=getDelivery(part,format,layout);
  return JSON.stringify({schema:'state-of-play.integration.v1',part:{id:part.id,version:part.version},format,layout,
    componentRoot:d.componentRoot,entry:d.entry,stylesheet:d.stylesheet,example:d.example,
    externalDependencies:d.externalDependencies,
    files:d.files.map(f=>({path:f.name,source:f.sourceName,role:f.group==='example'?'example':'runtime'})),
    note:'Paths are export-relative, not mandatory locations in your project. Review existing files before copying.'},null,2)+'\n';
}
export function packageContents(part: Part, format: Format, layout: Layout, includeCode = true): readonly ArchiveEntry[] {
  const d=getDelivery(part,format,layout);
  return validateArchiveEntries([...d.files, {name:'README.md',code:buildUsage(part,format,layout)},
    {name:'PROMPT.md',code:buildPrompt(part,format,layout,includeCode)}, {name:'INTEGRATION.json',code:buildManifest(part,format,layout)},
    ...Object.entries(part.preview).map(([name,code])=>({name:'preview/'+name,code}))]);
}
