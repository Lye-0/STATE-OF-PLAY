"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highlightedLines = highlightedLines;
exports.mountCodeViewer = mountCodeViewer;
const utils_1 = require("./utils.js");
function highlightedLines(code, language) {
    const lines = [''];
    const walk = (token, classes = []) => {
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
                lines[lines.length - 1] += classes.length ? `<span class="token ${classes.map(utils_1.escapeHTML).join(' ')}">${utils_1.escapeHTML(piece)}</span>` : utils_1.escapeHTML(piece);
        });
    };
    const grammar = window.Prism?.languages[language];
    if (grammar)
        walk(window.Prism.tokenize(code, grammar));
    else
        walk(code);
    return lines.map((line, i) => `<span class="code-line"><span class="line-number" aria-hidden="true">${i + 1}</span><span class="line-code">${line || ' '}</span></span>`).join('');
}
/** A real directory tree: displayed paths are exactly the paths saved to ZIP. */
function fileTreeHTML(files) {
    const root = {directories: new Map(), files: []};
    for (const file of files) {
        const segments = file.name.split('/');
        let branch = root, prefix = '';
        for (const folder of segments.slice(0, -1)) {
            prefix += (prefix ? '/' : '') + folder;
            if (!branch.directories.has(folder)) branch.directories.set(folder, {directories: new Map(), files: [], path: prefix});
            branch = branch.directories.get(folder);
        }
        branch.files.push(file);
    }
    function render(branch, level = 0) {
        return [...branch.directories.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([name, child]) =>
            `<details open class="source-directory" data-directory="${utils_1.escapeHTML(child.path)}"><summary title="${utils_1.escapeHTML(child.path)}" style="--level:${level}"><span class="directory-chevron" aria-hidden="true">›</span>${utils_1.icon('folder')}<span>${utils_1.escapeHTML(name)}</span></summary>${render(child, level + 1)}</details>`).join('') +
            branch.files.map(file => `<button type="button" class="file-item" style="--level:${level}" data-file="${utils_1.escapeHTML(file.name)}" title="${utils_1.escapeHTML(file.name)}">${utils_1.icon('file')}<span>${utils_1.escapeHTML(file.name.split('/').at(-1))}</span></button>`).join('');
    }
    return render(root);
}

function mountCodeViewer(host, files, options = {}) {
    if (!files.length) {
        host.textContent = '表示できるファイルがありません。';
        return;
    }
    let current = files.find(f => f.name === options.selected) ?? files[0], wrap = false;
    host.innerHTML = `<div class="source-workbench"><nav class="file-tree" aria-label="ソースファイル"><div class="tree-title">FILES <span>${files.length}</span></div><div class="tree-entries">${fileTreeHTML(files)}</div><label class="mobile-file-picker"><span class="sr-only">表示するソースファイル</span><select aria-label="表示するソースファイル">${files.map(f => `<option value="${utils_1.escapeHTML(f.name)}">${utils_1.escapeHTML(f.name)}</option>`).join('')}</select></label></nav><section class="editor" aria-label="コードプレビュー"><header class="editor-bar"><div class="editor-location"><span class="current-file"></span><span class="current-path"></span></div><div class="editor-tools"><button type="button" class="icon-button wrap-code" title="長い行を折り返す" aria-label="長い行を折り返す" aria-pressed="false">${utils_1.icon('wrap')}</button><span class="editor-tool-divider" aria-hidden="true"></span><button type="button" class="download-file small-button">${utils_1.icon('down')}<span>ファイルを保存</span></button><button type="button" class="copy-file small-button">${utils_1.icon('copy')}<span>コピー</span></button></div></header><div class="code-scroll" tabindex="0" aria-label="ソースコード。上下左右にスクロールできます"><pre><code></code></pre></div><footer class="editor-status"><span class="file-info"></span><span>READ ONLY <i></i> UTF-8</span></footer></section></div>`;
    const code = utils_1.required('code', host), copy = utils_1.required('.copy-file', host), download = utils_1.required('.download-file', host);
    const draw = () => {
        utils_1.resetCopyFeedback(copy);
        utils_1.required('.current-file', host).textContent = current.name.split('/').at(-1);
        const folder = current.name.split('/').slice(0, -1).join('/');
        utils_1.required('.current-path', host).textContent = folder || '/';
        utils_1.required('.editor-location', host).title = current.name;
        utils_1.required('.mobile-file-picker select', host).value = current.name;
        utils_1.required('.file-info', host).textContent = `${current.language.toUpperCase()} · ${current.code.split('\n').length} lines`;
        code.innerHTML = highlightedLines(current.code, current.language);
        utils_1.required('.code-scroll', host).scrollTo({top: 0, left: 0});
        host.querySelectorAll('.file-item').forEach(b => { const active = b.dataset.file === current.name; b.classList.toggle('selected', active); b.setAttribute('aria-current', String(active)); });
        copy.setAttribute('aria-label', `${current.name} をコピー`);
        download.setAttribute('aria-label', `${current.name} をダウンロード`);
        download.title = `${current.name} を保存`;
    };
    host.querySelectorAll('.file-item').forEach(button => button.addEventListener('click', () => { current = files.find(f => f.name === button.dataset.file); options.onSelect?.(current.name); draw(); }));
    utils_1.required('.mobile-file-picker select', host).addEventListener('change', event => {
        current = files.find(f => f.name === event.target.value);
        options.onSelect?.(current.name);
        // Reopen parents in case the viewport is later widened to desktop.
        host.querySelectorAll('.source-directory').forEach(dir => { if (current.name.startsWith(dir.dataset.directory + '/')) dir.open = true; });
        draw();
    });
    copy.addEventListener('click', () => void utils_1.copyText(current.code, copy, current.name));
    download.addEventListener('click', () => utils_1.saveSource(current.name.split('/').at(-1), current.code));
    const wrapButton = utils_1.required('.wrap-code', host);
    wrapButton.addEventListener('click', () => { wrap = !wrap; utils_1.required('.code-scroll', host).classList.toggle('wrapped', wrap); wrapButton.setAttribute('aria-pressed', String(wrap)); });
    draw();
}
