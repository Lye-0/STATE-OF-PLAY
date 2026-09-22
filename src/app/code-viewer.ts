import { copyText, escapeHTML, icon, required, resetCopyFeedback, saveSource } from './utils';
import type { SourceFile } from '../catalog/types';
interface FileTree { directories: Map<string, FileTree>; files: SourceFile[]; path?: string; }
export function highlightedLines(code: string, language: string) {
    const lines = [''];
    const walk = (token: string | PrismToken | (string | PrismToken)[], classes: string[] = []): void => {
        if (Array.isArray(token)) {
            token.forEach(t => walk(t, classes));
            return;
        }
        if (typeof token !== 'string') {
            walk(token.content, [...classes, token.type, ...(typeof token.alias === 'string' ? [token.alias] : token.alias ?? [])]);
            return;
        }
        token.split('\n').forEach((piece, i) => {
            if (i)
                lines.push('');
            if (piece)
                lines[lines.length - 1] += classes.length ? `<span class="token ${classes.map(escapeHTML).join(' ')}">${escapeHTML(piece)}</span>` : escapeHTML(piece);
        });
    };
    const grammar = window.Prism?.languages[language];
    if (grammar)
        walk(window.Prism!.tokenize(code, grammar));
    else
        walk(code);
    return lines.map((line, i) => `<span class="code-line"><span class="line-number" aria-hidden="true">${i + 1}</span><span class="line-code">${line || ' '}</span></span>`).join('');
}
/** A real directory tree: displayed paths are exactly the paths saved to ZIP. */
function fileTreeHTML(files: SourceFile[]) {
    const root: FileTree = {directories: new Map(), files: []};
    for (const file of files) {
        const segments = file.name.split('/');
        let branch = root, prefix = '';
        for (const folder of segments.slice(0, -1)) {
            prefix += (prefix ? '/' : '') + folder;
            if (!branch.directories.has(folder)) branch.directories.set(folder, {directories: new Map(), files: [], path: prefix});
            branch = branch.directories.get(folder)!;
        }
        branch.files.push(file);
    }
    function render(branch: FileTree, level = 0): string {
        return [...branch.directories.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([name, child]) =>
            `<details open class="source-directory" data-directory="${escapeHTML(child.path)}"><summary title="${escapeHTML(child.path)}" style="--level:${level}"><span class="directory-chevron" aria-hidden="true">›</span>${icon('folder')}<span>${escapeHTML(name)}</span></summary>${render(child, level + 1)}</details>`).join('') +
            branch.files.map(file => `<button type="button" class="file-item" style="--level:${level}" data-file="${escapeHTML(file.name)}" title="${escapeHTML(file.name)}">${icon('file')}<span>${escapeHTML(file.name.split('/').at(-1))}</span></button>`).join('');
    }
    return render(root);
}

export function mountCodeViewer(host: HTMLElement, files: SourceFile[], options: {selected?: string; onSelect?: (name: string) => void} = {}) {
    if (!files.length) {
        host.textContent = '表示できるファイルがありません。';
        return;
    }
    let current = files.find(f => f.name === options.selected) ?? files[0], wrap = false;
    host.innerHTML = `<div class="source-workbench"><nav class="file-tree" aria-label="ソースファイル"><div class="tree-title">FILES <span>${files.length}</span></div><div class="tree-entries">${fileTreeHTML(files)}</div><label class="mobile-file-picker"><span class="sr-only">表示するソースファイル</span><select aria-label="表示するソースファイル">${files.map(f => `<option value="${escapeHTML(f.name)}">${escapeHTML(f.name)}</option>`).join('')}</select></label></nav><section class="editor" aria-label="コードプレビュー"><header class="editor-bar"><div class="editor-location"><span class="current-file"></span><span class="current-path"></span></div><div class="editor-tools"><button type="button" class="icon-button wrap-code" title="長い行を折り返す" aria-label="長い行を折り返す" aria-pressed="false">${icon('wrap')}</button><span class="editor-tool-divider" aria-hidden="true"></span><button type="button" class="download-file small-button">${icon('down')}<span>ファイルを保存</span></button><button type="button" class="copy-file small-button">${icon('copy')}<span>コピー</span></button></div></header><div class="code-scroll" tabindex="0" aria-label="ソースコード。上下左右にスクロールできます"><pre><code></code></pre></div><footer class="editor-status"><span class="file-info"></span><span>READ ONLY <i></i> UTF-8</span></footer></section></div>`;
    const code = required('code', host), copy = required('.copy-file', host), download = required('.download-file', host);
    const draw = () => {
        resetCopyFeedback(copy);
        required('.current-file', host).textContent = current.name.split('/').at(-1)!;
        const folder = current.name.split('/').slice(0, -1).join('/');
        required('.current-path', host).textContent = folder || '/';
        required('.editor-location', host).title = current.name;
        required<HTMLSelectElement>('.mobile-file-picker select', host).value = current.name;
        required('.file-info', host).textContent = `${current.language.toUpperCase()} · ${current.code.split('\n').length} lines`;
        code.innerHTML = highlightedLines(current.code, current.language);
        required('.code-scroll', host).scrollTo({top: 0, left: 0});
        host.querySelectorAll<HTMLButtonElement>('.file-item').forEach(b => { const active = b.dataset.file === current.name; b.classList.toggle('selected', active); b.setAttribute('aria-current', String(active)); });
        copy.setAttribute('aria-label', `${current.name} をコピー`);
        download.setAttribute('aria-label', `${current.name} をダウンロード`);
        download.title = `${current.name} を保存`;
    };
    host.querySelectorAll<HTMLButtonElement>('.file-item').forEach(button => button.addEventListener('click', () => { current = files.find(f => f.name === button.dataset.file) ?? current; options.onSelect?.(current.name); draw(); }));
    required<HTMLSelectElement>('.mobile-file-picker select', host).addEventListener('change', event => {
        current = files.find(f => f.name === (event.currentTarget as HTMLSelectElement).value) ?? current;
        options.onSelect?.(current.name);
        // Reopen parents in case the viewport is later widened to desktop.
        host.querySelectorAll<HTMLDetailsElement>('.source-directory').forEach(dir => { if (current.name.startsWith(dir.dataset.directory + '/')) dir.open = true; });
        draw();
    });
    copy.addEventListener('click', () => void copyText(current.code, copy, current.name));
    download.addEventListener('click', () => saveSource(current.name.split('/').at(-1)!, current.code));
    const wrapButton = required('.wrap-code', host);
    wrapButton.addEventListener('click', () => { wrap = !wrap; required('.code-scroll', host).classList.toggle('wrapped', wrap); wrapButton.setAttribute('aria-pressed', String(wrap)); });
    draw();
}
