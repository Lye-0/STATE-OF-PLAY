"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeHTML = void 0;
exports.icon = icon;
exports.toast = toast;
exports.resetCopyFeedback = resetCopyFeedback;
exports.copyText = copyText;
exports.downloadBlob = downloadBlob;
exports.saveSource = saveSource;
exports.wireTabs = wireTabs;
exports.required = required;
exports.trapDialogFocus = trapDialogFocus;
const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
exports.escapeHTML = escapeHTML;
const paths = {
    code: '<path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',
    arrow: '<path d="M5 19 19 5M5 5h14v14"/>', down: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>', search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/>',
    play: '<path d="m8 5 11 7-11 7Z"/>', check: '<path d="m5 12 4 4L19 6"/>',
    spark: '<path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4ZM20 2v4m-2-2h4"/>',
    left: '<path d="m14 5-7 7 7 7"/>', right: '<path d="m10 5 7 7-7 7"/>',
    sound: '<path d="M3 9v6h4l5 4V5L7 9Zm13-1c4 2 4 6 0 8m3-11c6 4 6 10 0 14"/>',
    file: '<path d="M5 3h9l5 5v13H5Zm9 0v5h5"/>', reset: '<path d="M4 4v6h6M4 10a8 8 0 1 1 1 8"/>',
    wrap: '<path d="M3 6h18M3 11h13a4 4 0 0 1 0 8h-4m3-3-3 3 3 3M3 16h5"/>',
    book: '<path d="M12 5v15M3 4c4-1 7-1 9 1 2-2 5-2 9-1v15c-4-1-7-1-9 1-2-2-5-2-9-1Z"/>'
};
function icon(name, cls = '') { return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] ?? paths.code}</svg>`; }
let toastTimer = 0;
function toast(message, kind = 'info') {
    let element = document.getElementById('toast');
    if (!element) {
        element = document.createElement('div');
        element.id = 'toast';
        element.className = 'toast';
        element.setAttribute('role', 'status');
        element.setAttribute('aria-live', 'polite');
    }
    // A dialog occupies the browser top layer. A z-index on the body cannot cover it.
    const host = [...document.querySelectorAll('dialog[open]')].at(-1) ?? document.body;
    host.append(element);
    clearTimeout(toastTimer);
    element.dataset.kind = kind;
    element.innerHTML = `${icon(kind === 'success' ? 'check' : 'file')}<span>${escapeHTML(message)}</span>`;
    element.classList.add('visible');
    toastTimer = window.setTimeout(() => element?.classList.remove('visible'), 3000);
}
const feedback = new WeakMap();
function resetCopyFeedback(button) {
    const state = feedback.get(button);
    if (state) {
        clearTimeout(state.timer);
        button.innerHTML = state.original;
        if (state.label)
            button.setAttribute('aria-label', state.label);
        else
            button.removeAttribute('aria-label');
        feedback.delete(button);
    }
    button.classList.remove('is-copied', 'copy-pending');
    button.removeAttribute('aria-busy');
}
function manualCopy(text, origin) {
    document.querySelector('dialog.manual-copy')?.close();
    const modal = document.createElement('dialog');
    modal.className = 'manual-copy';
    modal.setAttribute('aria-labelledby', 'manual-copy-title');
    modal.innerHTML = `<div class="manual-icon">${icon('copy')}</div><h2 id="manual-copy-title">手動でコピー</h2><p>このブラウザーでは自動コピーが許可されませんでした。<br>選択されたテキストを <kbd>Ctrl / ⌘ + C</kbd> でコピーしてください。</p><textarea aria-label="手動コピー用のテキスト" readonly spellcheck="false"></textarea><button type="button" class="solid-button">閉じる</button>`;
    document.body.append(modal);
    trapDialogFocus(modal);
    const field = modal.querySelector('textarea');
    field.value = text;
    modal.querySelector('button').addEventListener('click', () => modal.close());
    modal.addEventListener('close', () => {
        modal.remove();
        if (origin?.isConnected)
            origin.focus({ preventScroll: true });
    }, { once: true });
    modal.showModal();
    field.focus();
    field.select();
}
async function copyText(text, button, label = 'テキスト') {
    const origin = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    let state;
    if (button) {
        resetCopyFeedback(button);
        state = { original: button.innerHTML, label: button.getAttribute('aria-label'), timer: 0, token: Symbol() };
        feedback.set(button, state);
        button.classList.add('copy-pending');
        button.setAttribute('aria-busy', 'true');
    }
    let ok = false;
    try {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
            ok = true;
        }
    }
    catch { /* Fall back to a user-gesture copy inside the active top layer. */ }
    if (!ok) {
        const area = document.createElement('textarea');
        area.value = text;
        area.readOnly = true;
        area.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;';
        ([...document.querySelectorAll('dialog[open]')].at(-1) ?? document.body).append(area);
        area.focus();
        area.select();
        try {
            ok = document.execCommand('copy');
        }
        catch {
            ok = false;
        }
        finally {
            area.remove();
            if (origin?.isConnected)
                origin.focus({ preventScroll: true });
        }
    }
    // File/format may have changed while the clipboard permission UI was open.
    if (button && state && feedback.get(button)?.token === state.token && button.isConnected) {
        button.classList.remove('copy-pending');
        button.removeAttribute('aria-busy');
        if (ok) {
            button.classList.add('is-copied');
            button.innerHTML = `${icon('check')}<span>コピー済み</span>`;
            button.setAttribute('aria-label', `${label} をコピーしました`);
            state.timer = window.setTimeout(() => resetCopyFeedback(button), 2200);
        }
        else
            resetCopyFeedback(button);
    }
    if (ok)
        toast(`${label} をコピーしました`, 'success');
    else
        manualCopy(text, origin);
    return ok;
}
function downloadBlob(blob, name) {
    const url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url;
    a.download = name;
    // Keep the anchor inside a modal when present, just like the clipboard fallback.
    ([...document.querySelectorAll('dialog[open]')].at(-1) ?? document.body).append(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 30000);
}
function saveSource(name, code) {
    downloadBlob(new Blob([code], { type: 'text/plain;charset=utf-8' }), name);
    toast(`${name} のダウンロードを開始しました`, 'success');
}
function wireTabs(list, activate) {
    list.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key))
            return;
        const tabs = [...list.querySelectorAll('[role="tab"]')];
        if (!tabs.length)
            return;
        const i = tabs.indexOf(document.activeElement);
        const index = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (i + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        event.preventDefault();
        tabs[index].focus();
        activate(tabs[index]);
    });
}
function required(selector, root = document) {
    const element = root.querySelector(selector);
    if (!element)
        throw new Error(`Missing UI element: ${selector}`);
    return element;
}
function trapDialogFocus(dialog) {
    dialog.addEventListener('keydown', event => {
        if (event.key !== 'Tab')
            return;
        const candidates = [...dialog.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),textarea:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])')]
            .filter(el => el.tabIndex >= 0 && el.getClientRects().length > 0 && !el.closest('[hidden], [inert]') && getComputedStyle(el).visibility !== 'hidden');
        if (!candidates.length) {
            event.preventDefault();
            dialog.focus();
            return;
        }
        const first = candidates[0], last = candidates[candidates.length - 1], active = document.activeElement;
        if (event.shiftKey && (active === first || !dialog.contains(active))) {
            event.preventDefault();
            last.focus();
        }
        else if (!event.shiftKey && (active === last || !dialog.contains(active))) {
            event.preventDefault();
            first.focus();
        }
    });
}
