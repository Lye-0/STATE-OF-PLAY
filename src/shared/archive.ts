export type ArchiveMode = 'source' | 'text';
export interface ArchiveEntry { name: string; code: string; }
export interface ArchiveSink {
  folder(name: string): unknown;
  file(name: string, code: string, options: { binary: boolean; createFolders: boolean }): unknown;
}
interface Tree extends Map<string, Tree> {}
/** ZIP source names are validated before they enter any archive. No executable wrappers. */
export function validateArchivePath(name: string) {
    if (!name || name.startsWith('/') || name.includes('\\') || /[\x00-\x1f<>:"|?*]/.test(name))
        throw new Error(`Unsafe archive path: ${name}`);
    for (const segment of name.split('/')) {
        if (!segment || segment === '.' || segment === '..' || /[ .]$/.test(segment) ||
            /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(segment))
            throw new Error(`Unsafe archive path: ${name}`);
    }
    return name;
}
export const WINDOWS_README = `WindowsでZIPの展開がブロックされる場合\n\nこのZIPはUIコンポーネントのソースコードです。JavaScriptはエディターで開いてください。\n.jsをWindows上で直接ダブルクリックして実行する用途ではありません。\n\nWindowsはインターネット由来のファイルにセキュリティ情報（Mark of the Web）を付け、\nZIP内のスクリプトをブロックすることがあります。このZIPの生成側で解除はできません。\n\n1. 入手元と内容を確認し、Windows セキュリティでスキャンしてください。\n2. 信頼できると判断したZIPだけを右クリックして「プロパティ」を開きます。\n3. 「全般」の下部に「許可する」または「ブロックの解除」があれば選び、「適用」を押します。\n4. 途中まで展開したフォルダーを使わず、別の新しいフォルダーへ展開し直します。\n\n項目がない場合、操作できない場合、ウイルスの検出名が表示される場合は、\nこの手順で無理に実行せず、Windows セキュリティの保護の履歴や管理者ポリシーを確認してください。\nDefender・SmartScreenの全体無効化、フォルダー除外、レジストリ変更は必要ありません。\n\nテキスト保管版は、実装を.txtとしてレビューするための形式です。\n元の拡張子へ戻す前に内容を確認してください。セキュリティ上の安全性を保証するものではありません。\n\nMicrosoft公式説明:\nhttps://support.microsoft.com/ja-jp/windows/security/information-about-the-attachment-manager-in-microsoft-windows\n`;
/** Both modes preserve the exact source bytes; text mode only changes entry names. */
export function prepareArchive(files: readonly ArchiveEntry[], mode: ArchiveMode) {
    if (mode !== 'source' && mode !== 'text')
        throw new Error('Unknown archive mode');
    const seen = new Set();
    const entries = [...files, { name: 'WINDOWS-README.txt', code: WINDOWS_README }].map(file => {
        const name = validateArchivePath(file.name);
        const key = name.toLowerCase();
        if (seen.has(key))
            throw new Error(`Duplicate archive path: ${name}`);
        seen.add(key);
        if (typeof file.code !== 'string')
            throw new TypeError(`Non-text source: ${name}`);
        return { name, code: file.code };
    });
    validateArchiveEntries(entries);
    if (mode === 'source')
        return entries;
    const map = entries.map(file => ({ saved: file.name + '.txt', original: file.name }));
    const result = [
        ...entries.map(file => ({ name: file.name + '.txt', code: file.code })),
        { name: 'FILE-MAP.json.txt', code: JSON.stringify({ format: 'sop-text-source-v1', files: map }, null, 2) + '\n' },
        { name: 'READ-FIRST.txt', code: 'テキスト保管用のソースコードです。すべてのファイル名末尾に .txt を付けています。\nエディターで内容を確認後、FILE-MAP.json.txt の original 欄を参照して元の名前に戻してください。\n自動実行・自動的なブロック解除は行いません。通常のソースZIPを使う場合の案内は WINDOWS-README.txt.txt にあります。\n' }
    ];
    // Generated review manifests must never overwrite a user-supplied file.
    const outputNames = new Set();
    for (const file of result) {
        validateArchivePath(file.name);
        const key = file.name.toLowerCase();
        if (outputNames.has(key))
            throw new Error(`Duplicate generated archive path: ${file.name}`);
        outputNames.add(key);
    }
    validateArchiveEntries(result);
    return result;
}

/** Validate file/directory conflicts as well as whole-path duplicates. */
export function validateArchiveEntries(entries: readonly ArchiveEntry[]) {
    const files = new Set();
    const directories = new Map();
    for (const entry of entries) {
        const name = validateArchivePath(entry.name);
        const key = name.toLowerCase();
        if (files.has(key) || directories.has(key)) throw new Error(`Conflicting archive path: ${name}`);
        const pieces = name.split('/');
        for (let i = 1; i < pieces.length; i++) {
            const directory = pieces.slice(0, i).join('/');
            const dirKey = directory.toLowerCase();
            if (files.has(dirKey)) throw new Error(`File used as a directory: ${directory}`);
            if (directories.has(dirKey) && directories.get(dirKey) !== directory)
                throw new Error(`Inconsistent directory case: ${directory}`);
            directories.set(dirKey, directory);
        }
        files.add(key);
    }
    return entries;
}
/** Explicit directory records preserve empty folders and hierarchical ZIP viewers too. */
export function addArchiveEntries<T extends ArchiveSink>(zip: T, root: string, entries: readonly ArchiveEntry[]) {
    validateArchivePath(root);
    validateArchiveEntries(entries);
    zip.folder(root);
    for (const entry of entries) {
        zip.file(`${root}/${entry.name}`, entry.code, {binary: false, createFolders: true});
    }
    return zip;
}
export function archiveTree(names: readonly string[]) {
    const tree: Tree = new Map();
    for (const name of names) {
        let branch = tree;
        for (const piece of validateArchivePath(name).split('/')) {
            if (!branch.has(piece)) branch.set(piece, new Map());
            branch = branch.get(piece)!;
        }
    }
    function draw(branch: Tree, prefix = ''): string[] {
        const list = [...branch.entries()].sort(([a, childrenA], [b, childrenB]) =>
            Number(childrenB.size > 0) - Number(childrenA.size > 0) || a.localeCompare(b));
        return list.flatMap(([name, children], index) => {
            const last = index === list.length - 1;
            return [`${prefix}${last ? '└─ ' : '├─ '}${name}${children.size ? '/' : ''}`,
                ...draw(children, prefix + (last ? '   ' : '│  '))];
        });
    }
    return draw(tree).join('\n');
}
