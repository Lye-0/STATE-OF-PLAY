"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showPackageDownload = showPackageDownload;
const archive_ts_1 = require("../shared/archive.js");
const utils_js_1 = require("./utils.js");
/** A local export UI. It never changes Windows security policy or sends source off-device. */
function showPackageDownload(part, format, prompt, trigger) {
    const dialog = document.createElement('dialog');
    dialog.className = 'package-dialog';
    dialog.setAttribute('aria-labelledby', 'package-title');
    dialog.innerHTML = `<header class="package-heading"><span class="section-kicker">TAKE IT WITH YOU</span><button type="button" class="icon-button package-close" aria-label="ダウンロード設定を閉じる">${(0, utils_js_1.icon)('close')}</button><h2 id="package-title">パーツを持ち出す。</h2><p>${(0, utils_js_1.escapeHTML)(part.name)} <span>· ${format.toUpperCase()} · v${(0, utils_js_1.escapeHTML)(part.version)}</span></p></header><fieldset class="package-formats"><legend>ZIPの保存形式</legend><label class="package-option"><input type="radio" name="package-mode" value="source" checked><span><b>通常のソース ZIP</b><small>元のファイル名・拡張子。そのまま開発へ組み込めます。</small></span><em>標準</em></label><label class="package-option"><input type="radio" name="package-mode" value="text"><span><b>テキスト保管用 ZIP</b><small>全ファイルに .txt を追加。読む・レビューするための形式です。</small></span></label></fieldset><p class="package-mode-note" role="status">コンポーネント、共通処理、使用例、分離構成のデモをまとめます。</p><details class="windows-help"><summary>${(0, utils_js_1.icon)('book')}Windowsで展開をブロックされたとき</summary><div><p>ダウンロード元の情報により、ZIP内のスクリプトがブロックされる場合があります。ZIPの生成側で、この保護を解除することはできません。</p><ol><li>入手元と内容を確認し、Windows セキュリティでスキャン。</li><li>信頼できるZIPだけを右クリック → <b>プロパティ</b>。</li><li>全般の <b>「許可する／ブロックの解除」</b> があれば選んで適用。</li><li>新しいフォルダーへ展開し直す。</li></ol><p class="windows-caution">Defenderなどの保護機能を全体で無効化しないでください。検出名が表示される場合や解除項目がない場合は、保護の履歴や管理者ポリシーを確認してください。</p></div></details><footer class="package-bottom"><span>ローカルで生成 · 外部送信なし</span><button type="button" class="solid-button package-save">${(0, utils_js_1.icon)('down')}ZIPを保存</button></footer>`;
    document.body.append(dialog);
    (0, utils_js_1.trapDialogFocus)(dialog);
    dialog.querySelector('.package-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => { dialog.remove(); if (trigger?.isConnected)
        trigger.focus({ preventScroll: true }); }, { once: true });
    dialog.addEventListener('click', event => {
        if (event.target !== dialog)
            return;
        const r = dialog.getBoundingClientRect();
        if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)
            dialog.close();
    });
    dialog.querySelectorAll('input').forEach(input => input.addEventListener('change', () => {
        dialog.querySelector('.package-mode-note').textContent = input.value === 'text'
            ? '実装内容は同じです。利用前に末尾の .txt を外して元の名前へ戻してください。安全性の保証や保護の解除は行いません。'
            : 'コンポーネント、共通処理、使用例、分離構成のデモをまとめます。';
    }));
    dialog.querySelector('.package-save').addEventListener('click', async (event) => {
        const button = event.currentTarget;
        const label = button.innerHTML;
        button.disabled = true;
        button.setAttribute('aria-busy', 'true');
        button.innerHTML = `${(0, utils_js_1.icon)('down')}生成中…`;
        const mode = dialog.querySelector('input:checked').value;
        try {
            const zip = new window.JSZip();
            const files = [...part.files[format], { name: 'README.md', code: part.usage }, { name: 'PROMPT.md', code: prompt },
                ...Object.entries(part.preview).map(([name, code]) => ({ name: 'preview/' + name, code }))];
            const entries = (0, archive_ts_1.prepareArchive)(files, mode);
            const root = `${part.id}-${format}${mode === 'text' ? '-text' : ''}/`;
            for (const entry of entries)
                zip.file(root + entry.name, entry.code, { binary: false, createFolders: true });
            const blob = await zip.generateAsync({ type: 'blob', mimeType: 'application/zip', compression: 'DEFLATE', compressionOptions: { level: 6 }, platform: 'DOS' });
            (0, utils_js_1.downloadBlob)(blob, `${part.id}-${format}-v${part.version}${mode === 'text' ? '-text' : ''}.zip`);
            button.innerHTML = `${(0, utils_js_1.icon)('check')}保存を開始しました`;
            (0, utils_js_1.toast)('ZIPのダウンロードを開始しました', 'success');
            setTimeout(() => { if (button.isConnected)
                button.innerHTML = label; }, 2500);
        }
        catch (error) {
            console.error('Package export failed', error);
            button.innerHTML = label;
            (0, utils_js_1.toast)('ZIPを生成できませんでした。もう一度お試しください。', 'error');
        }
        finally {
            button.disabled = false;
            button.removeAttribute('aria-busy');
        }
    });
    dialog.showModal();
    dialog.querySelector('input:checked').focus({ preventScroll: true });
}
