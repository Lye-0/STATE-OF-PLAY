import { downloadBlob, escapeHTML, icon, required, toast, trapDialogFocus } from './utils';
import { addArchiveEntries, archiveTree, prepareArchive } from '../shared/archive';
import type { Part, Format } from '../catalog/types';
import type { ArchiveMode } from '../shared/archive';
/** A local export UI. It never changes Windows security policy or sends source off-device. */
export function showPackageDownload(part: Part, format: Format, prompt: string, trigger?: HTMLElement) {
    const dialog = document.createElement('dialog');
    dialog.className = 'package-dialog';
    dialog.setAttribute('aria-labelledby', 'package-title');
    dialog.innerHTML = `<header class="package-heading"><span class="section-kicker">TAKE IT WITH YOU</span><button type="button" class="icon-button package-close" aria-label="ダウンロード設定を閉じる">${icon('close')}</button><h2 id="package-title">パーツを持ち出す。</h2><p>${escapeHTML(part.name)} <span>· ${format.toUpperCase()} · v${escapeHTML(part.version)}</span></p></header><fieldset class="package-formats"><legend>ZIPの保存形式</legend><label class="package-option"><input type="radio" name="package-mode" value="source" checked><span><b>通常のソース ZIP</b><small>元のファイル名・拡張子。そのまま開発へ組み込めます。</small></span><em>標準</em></label><label class="package-option"><input type="radio" name="package-mode" value="text"><span><b>テキスト保管用 ZIP</b><small>全ファイルに .txt を追加。読む・レビューするための形式です。</small></span></label></fieldset><p class="package-mode-note" role="status">元のフォルダー階層を保ち、コンポーネント・共通処理・使用例・独立デモをまとめます。</p><details class="package-layout" open><summary>フォルダー構成を保持</summary><p>展開すると以下の階層を再現します。src/ をフォルダーごと配置してください。</p><pre class="package-tree" aria-label="ZIPのフォルダー構成"></pre></details><details class="windows-help"><summary>${icon('book')}Windowsで展開をブロックされたとき</summary><div><p>ダウンロード元の情報により、ZIP内のスクリプトがブロックされる場合があります。ZIPの生成側で、この保護を解除することはできません。</p><ol><li>入手元と内容を確認し、Windows セキュリティでスキャン。</li><li>信頼できるZIPだけを右クリック → <b>プロパティ</b>。</li><li>全般の <b>「許可する／ブロックの解除」</b> があれば選んで適用。</li><li>新しいフォルダーへ展開し直す。</li></ol><p class="windows-caution">Defenderなどの保護機能を全体で無効化しないでください。検出名が表示される場合や解除項目がない場合は、保護の履歴や管理者ポリシーを確認してください。</p></div></details><footer class="package-bottom"><span>ローカルで生成 · 外部送信なし</span><button type="button" class="solid-button package-save">${icon('down')}ZIPを保存</button></footer>`;
    document.body.append(dialog);
    function drawTree() {
        const mode = required<HTMLInputElement>('input:checked', dialog).value as ArchiveMode;
        const files = [...part.files[format], {name: 'README.md', code: part.usage}, {name: 'PROMPT.md', code: prompt},
            ...Object.entries(part.preview).map(([name, code]) => ({name: 'preview/' + name, code}))];
        const entries = prepareArchive(files, mode);
        required('.package-tree', dialog).textContent = `${part.id}-${format}${mode === 'text' ? '-text' : ''}/\n` + archiveTree(entries.map(f => f.name));
    }
    drawTree();
    trapDialogFocus(dialog);
    required('.package-close', dialog).addEventListener('click', () => dialog.close());
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
        drawTree();
        required('.package-mode-note', dialog).textContent = input.value === 'text'
            ? '実装内容は同じです。利用前に末尾の .txt を外して元の名前へ戻してください。安全性の保証や保護の解除は行いません。'
            : '元のフォルダー階層を保ち、コンポーネント・共通処理・使用例・独立デモをまとめます。';
    }));
    required<HTMLButtonElement>('.package-save', dialog).addEventListener('click', async (event) => {
        const button = event.currentTarget as HTMLButtonElement;
        const label = button.innerHTML;
        button.disabled = true;
        button.setAttribute('aria-busy', 'true');
        button.innerHTML = `${icon('down')}生成中…`;
        const mode = required<HTMLInputElement>('input:checked', dialog).value as ArchiveMode;
        try {
            const zip = new window.JSZip();
            const files = [...part.files[format], { name: 'README.md', code: part.usage }, { name: 'PROMPT.md', code: prompt },
                ...Object.entries(part.preview).map(([name, code]) => ({ name: 'preview/' + name, code }))];
            const entries = prepareArchive(files, mode);
            const root = `${part.id}-${format}${mode === 'text' ? '-text' : ''}`;
            addArchiveEntries(zip, root, entries);
            const blob = await zip.generateAsync({ type: 'blob', mimeType: 'application/zip', compression: 'DEFLATE', compressionOptions: { level: 6 }, platform: 'DOS' });
            downloadBlob(blob, `${part.id}-${format}-v${part.version}${mode === 'text' ? '-text' : ''}.zip`);
            button.innerHTML = `${icon('check')}保存を開始しました`;
            toast('ZIPのダウンロードを開始しました', 'success');
            setTimeout(() => { if (button.isConnected)
                button.innerHTML = label; }, 2500);
        }
        catch (error) {
            console.error('Package export failed', error);
            button.innerHTML = label;
            toast('ZIPを生成できませんでした。もう一度お試しください。', 'error');
        }
        finally {
            button.disabled = false;
            button.removeAttribute('aria-busy');
        }
    });
    dialog.showModal();
    required<HTMLInputElement>('input:checked', dialog).focus({ preventScroll: true });
}
