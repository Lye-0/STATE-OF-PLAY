"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WINDOWS_README = void 0;
exports.validateArchivePath = validateArchivePath;
exports.prepareArchive = prepareArchive;
/** ZIP source names are validated before they enter any archive. No executable wrappers. */
function validateArchivePath(name) {
    if (!name || name.startsWith('/') || name.includes('\\') || /[\x00-\x1f<>:"|?*]/.test(name))
        throw new Error(`Unsafe archive path: ${name}`);
    for (const segment of name.split('/')) {
        if (!segment || segment === '.' || segment === '..' || /[ .]$/.test(segment) ||
            /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(segment))
            throw new Error(`Unsafe archive path: ${name}`);
    }
    return name;
}
exports.WINDOWS_README = `WindowsでZIPの展開がブロックされる場合\n\nこのZIPはUIコンポーネントのソースコードです。JavaScriptはエディターで開いてください。\n.jsをWindows上で直接ダブルクリックして実行する用途ではありません。\n\nWindowsはインターネット由来のファイルにセキュリティ情報（Mark of the Web）を付け、\nZIP内のスクリプトをブロックすることがあります。このZIPの生成側で解除はできません。\n\n1. 入手元と内容を確認し、Windows セキュリティでスキャンしてください。\n2. 信頼できると判断したZIPだけを右クリックして「プロパティ」を開きます。\n3. 「全般」の下部に「許可する」または「ブロックの解除」があれば選び、「適用」を押します。\n4. 途中まで展開したフォルダーを使わず、別の新しいフォルダーへ展開し直します。\n\n項目がない場合、操作できない場合、ウイルスの検出名が表示される場合は、\nこの手順で無理に実行せず、Windows セキュリティの保護の履歴や管理者ポリシーを確認してください。\nDefender・SmartScreenの全体無効化、フォルダー除外、レジストリ変更は必要ありません。\n\nテキスト保管版は、実装を.txtとしてレビューするための形式です。\n元の拡張子へ戻す前に内容を確認してください。セキュリティ上の安全性を保証するものではありません。\n\nMicrosoft公式説明:\nhttps://support.microsoft.com/ja-jp/windows/security/information-about-the-attachment-manager-in-microsoft-windows\n`;
/** Both modes preserve the exact source bytes; text mode only changes entry names. */
function prepareArchive(files, mode) {
    if (mode !== 'source' && mode !== 'text')
        throw new Error('Unknown archive mode');
    const seen = new Set();
    const entries = [...files, { name: 'WINDOWS-README.txt', code: exports.WINDOWS_README }].map(file => {
        const name = validateArchivePath(file.name);
        const key = name.toLowerCase();
        if (seen.has(key))
            throw new Error(`Duplicate archive path: ${name}`);
        seen.add(key);
        if (typeof file.code !== 'string')
            throw new TypeError(`Non-text source: ${name}`);
        return { name, code: file.code };
    });
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
    return result;
}
