"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDetails = createDetails;
const package_download_js_1 = require("./package-download.js");
const utils_2 = require("./utils.js");
const types_1 = require("../catalog/types.js");
const registry_generated_1 = require("../catalog/registry.generated.js");
const utils_1 = require("./utils.js");
const code_viewer_1 = require("./code-viewer.js");
const samples_1 = require("./samples.js");
function createDetails(parts, callbacks) {
    const dialog = utils_2.required('#part-details');
    utils_1.trapDialogFocus(dialog);
    if (!parts.length)
        throw new Error('The part library must not be empty.');
    let part = parts[0];
    let format = 'tsx', tab = 'code', controller = null;
    let origin = null, loop = 0, copiedWithCode = true;
    const sourceNames = {};
    let background = 'studio';
    try {
        const saved = localStorage.getItem('sop-format');
        if (saved && saved in types_1.FORMATS)
            format = saved;
    }
    catch { }
    const stopLoop = () => { clearInterval(loop); loop = 0; dialog.querySelector('#preview-loop')?.setAttribute('aria-pressed', 'false'); };
    function destroyPreview() { stopLoop(); controller?.destroy(); controller = null; }
    function close() {
        if (dialog.open)
            dialog.close();
    }
    dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
    dialog.addEventListener('click', event => {
        if (event.target !== dialog)
            return;
        const r = dialog.getBoundingClientRect();
        const pointer = event;
        if (pointer.clientX < r.left || pointer.clientX > r.right || pointer.clientY < r.top || pointer.clientY > r.bottom)
            close();
    });
    dialog.addEventListener('close', () => {
        const notice = dialog.querySelector('#toast');
        if (notice) {
            notice.classList.remove('visible');
            document.body.append(notice);
        }
        destroyPreview();
        callbacks.onActive(false);
        document.body.classList.remove('details-open');
        if (location.hash.startsWith('#part='))
            history.replaceState(null, '', '#collection');
        if (origin?.isConnected)
            origin.focus({ preventScroll: true });
    });
    function filesText() { return part.files[format].map(f => `\n## ${f.name}\n\n\`\`\`${f.language}\n${f.code}\n\`\`\``).join('\n'); }
    function promptText() {
        return `# ${part.name} を既存プロジェクトに組み込む\n\n参照パーツ: STATE OF PLAY / ${part.id} / v${part.version}\n出力形式: ${types_1.FORMATS[format].label}\n\n現在のプロジェクト構成を確認し、下記の実装を基準に部品を組み込んでください。元の外観と動作を優先し、統合に必要な接続以外のデザイン変更はしないでください。添付にないファイルが必要な場合は、その内容も省略せず実装してください。\n\n${part.prompt}\n\n## 利用方法\n${part.usage}` + (copiedWithCode ? `\n\n## 正本のソースコード\n以下は現在プレビューしている部品の実装と、同じ元ファイルから生成した${types_1.FORMATS[format].label}版です。共通処理もすべて含まれます。\n${filesText()}` : '\n\n文章のみでの再実装では差異が生じる可能性があります。色・輪郭・寸法・素材感を上の仕様に合わせ、ON/OFFやホバーの途中の状態も確認してください。');
    }
    function downloadPackage(button) {
        (0, package_download_js_1.showPackageDownload)(part, format, promptText(), button);
    }
    function drawMain() {
        dialog.querySelectorAll('[data-detail-tab]').forEach(b => {
            const active = b.dataset.detailTab === tab;
            b.setAttribute('aria-selected', String(active));
            b.tabIndex = active ? 0 : -1;
        });
        dialog.querySelectorAll('[data-format]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.format === format)));
        utils_2.required('#format-note', dialog).textContent = types_1.FORMATS[format].note;
        const pane = utils_2.required('#detail-pane', dialog);
        pane.className = `detail-pane pane-${tab}`;
        pane.setAttribute('aria-labelledby', `tab-${tab}`);
        if (tab === 'code')
            code_viewer_1.mountCodeViewer(pane, part.files[format], { selected: sourceNames[part.id + format], onSelect: name => sourceNames[part.id + format] = name });
        if (tab === 'guide') {
            const sample = part.files[format].find(f => f.name.startsWith('Example.') || f.name.startsWith('main.'));
            const react = format === 'tsx' || format === 'jsx';
            const options = react ? part.props : part.category === 'toggles' ? [
                ['init(element, options)', 'HTMLButtonElement', '対象のボタンを渡して初期化します。'],
                ['options.checked', 'boolean', '初期のON/OFF状態。'],
                ['options.onCheckedChange', '(checked: boolean) => void', '操作による状態変更を受け取ります。'],
                ['controller.setChecked(value)', 'boolean', '外部のアプリ状態に合わせて切り替えます。'],
                ['element.disabled', 'boolean', 'ボタンの標準プロパティで操作を無効にします。'],
                ['controller.destroy()', 'void', '取り外す前に描画・監視・イベントを解除します。']
            ] : [
                ['.sop-surface-content', 'HTML', 'この中に文章やボタンなどの内容を配置します。'],
                ['init(element, options)', 'HTMLElement', 'ブロックのルート要素を渡して初期化します。'],
                ['options.tilt / intensity', 'boolean / number', '傾きの有効化と強さを変更します。'],
                ['--sop-padding', 'CSSカスタムプロパティ', '中身の余白を指定します。初期値28px。'],
                ['controller.destroy()', 'void', '取り外す前にイベントと描画を解除します。']
            ];
            pane.innerHTML = `<div class="guide-scroll"><div class="section-kicker">FROM GALLERY TO YOUR PROJECT</div><h3>このパーツを、あなたの開発へ。</h3><p class="guide-lead">${react ? 'コンポーネントとCSS、必要な共通処理をまとめて配置します。' : 'HTMLとCSSを配置して、対象の要素を初期化します。'}展示枠やギャラリーのUIは持ち込まれません。</p><div class="guide-step"><span>01</span><div><h4>必要なファイルを配置</h4><p>下の「パーツZIP」で、${types_1.FORMATS[format].label}版の${part.files[format].length}ファイルと独立デモを取得できます。ファイル同士の相対パスを保って配置してください。</p></div></div><div class="guide-step"><span>02</span><div><h4>${react ? 'importして、状態や中身を渡す' : '初期化し、取り外すときは後片付け'}</h4><p>${react ? 'Reactを導入済みのプロジェクトで使います。CSSはコンポーネントから読み込みます。' : 'init(element)の返り値を保存し、部品を取り外すときにdestroy()を呼びます。'}${format === 'ts' ? ' TypeScriptを変換できるビルド環境が必要です。' : ''}</p></div></div>${sample ? `<div class="example-block"><header><span>${utils_1.escapeHTML(sample.name)}</span><button type="button" class="small-button" id="copy-example">${utils_1.icon('copy')}使用例をコピー</button></header><pre><code>${code_viewer_1.highlightedLines(sample.code, sample.language)}</code></pre></div>` : ''}<div class="guide-step"><span>03</span><div><h4>必要な設定だけを変更</h4><p>素材感や動きを保ったまま、アプリの状態、内容、配置を接続します。</p></div></div><div class="props-table"><table><thead><tr><th>設定</th><th>型 / 値</th><th>役割</th></tr></thead><tbody>${options.map(p => `<tr><td><code>${utils_1.escapeHTML(p[0])}</code></td><td>${utils_1.escapeHTML(p[1])}</td><td>${utils_1.escapeHTML(p[2])}</td></tr>`).join('')}</tbody></table></div><div class="guide-note"><b>一緒に確認すること</b><p>複数配置、無効状態、キーボード、動きを減らす設定。Reactでは画面の表示・取り外し時にも動作を確認してください。効果音は展示専用の任意機能で、パーツの必須依存ではありません。</p></div>${part.category === 'toggles' ? `<button type="button" class="related-inline" data-related="original-surface">${utils_1.icon('arrow')}今の背景も使う — Original Surface</button>` : ''}</div>`;
            pane.querySelector('#copy-example')?.addEventListener('click', event => sample && void utils_1.copyText(sample.code, event.currentTarget, sample.name));
            pane.querySelector('[data-related]')?.addEventListener('click', () => callbacks.onNavigate('original-surface'));
        }
        if (tab === 'prompt') {
            pane.innerHTML = `<div class="prompt-scroll"><div class="section-kicker">TAKE THE INTENTION WITH YOU</div><h3>見た目だけでなく、意図も渡す。</h3><p class="guide-lead">新しいAIとの会話に、そのまま貼り付けられる再現・組み込み指示です。</p><div class="prompt-modes"><button type="button" data-prompt-mode="full" aria-pressed="${copiedWithCode}">${utils_1.icon('code')}<span><b>コード込み</b><small>再現性を優先する標準形式</small></span><i>推奨</i></button><button type="button" data-prompt-mode="spec" aria-pressed="${!copiedWithCode}">${utils_1.icon('spark')}<span><b>再現仕様のみ</b><small>別の構成で作り直すときに</small></span></button></div><div class="prompt-toolbar"><span id="prompt-size"></span><button type="button" class="small-button" id="copy-prompt">${utils_1.icon('copy')}プロンプトをコピー</button></div><textarea id="prompt-text" readonly spellcheck="false" aria-label="AI用の再現・組み込みプロンプト"></textarea><p class="prompt-caution">コード込みには必要ファイルと具体的な仕様が入ります。AIの出力そのものを保証するものではありません。APIへの送信は行いません。</p></div>`;
            const text = promptText();
            utils_2.required('#prompt-text', pane).value = text;
            utils_2.required('#prompt-size', pane).textContent = `${text.length.toLocaleString()} characters · ${types_1.FORMATS[format].short}`;
            utils_2.required('#copy-prompt', pane).addEventListener('click', event => void utils_1.copyText(promptText(), event.currentTarget, 'AI用プロンプト'));
            pane.querySelectorAll('[data-prompt-mode]').forEach(button => button.addEventListener('click', () => { copiedWithCode = button.dataset.promptMode === 'full'; drawMain(); pane.querySelector(`[data-prompt-mode="${copiedWithCode ? 'full' : 'spec'}"]`)?.focus(); }));
        }
        utils_2.required('#package-label', dialog).textContent = `${part.files[format].length} FILES · ${format.toUpperCase()}`;
    }
    function updatePreviewState() {
        const state = controller?.getChecked?.() ?? false;
        utils_2.required('#detail-state', dialog).textContent = state ? 'ON' : 'OFF';
        dialog.querySelectorAll('[data-state]').forEach(b => b.setAttribute('aria-pressed', String((b.dataset.state === 'on') === state)));
    }
    function open(id, trigger) {
        const next = parts.find(p => p.id === id);
        if (!next)
            return;
        const wasOpen = dialog.open;
        destroyPreview();
        part = next;
        if (!wasOpen) {
            origin = trigger ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
            tab = 'code';
        }
        const toggle = part.category === 'toggles';
        dialog.innerHTML = `<div class="detail-shell"><header class="detail-top"><div class="detail-breadcrumb"><span class="mini-brand" aria-hidden="true">◒</span>THE COLLECTION<span>/</span>${toggle ? 'TOGGLES' : 'SURFACES'}<span>/</span><strong>${utils_1.escapeHTML(part.id)}</strong></div><div class="detail-nav"><button type="button" class="icon-button" id="previous-part" aria-label="前のパーツ">${utils_1.icon('left')}</button><button type="button" class="icon-button" id="next-part" aria-label="次のパーツ">${utils_1.icon('right')}</button><span class="nav-divider"></span><button type="button" class="icon-button close-detail" aria-label="詳細を閉じる">${utils_1.icon('close')}</button></div></header><div class="detail-body"><aside class="preview-sidebar"><div class="preview-heading"><span class="section-kicker">${String(part.order).padStart(2, '0')} / ${utils_1.escapeHTML(part.material)}</span><h2 id="detail-title">${utils_1.escapeHTML(part.name)}</h2><p>${utils_1.escapeHTML(part.tagline)}</p></div><div class="live-preview ${toggle ? 'toggle-preview' : 'block-preview'} bg-${background}" data-preview-part="${utils_1.escapeHTML(part.id)}"><div class="preview-status"><span><i></i>LIVE PREVIEW</span><span id="detail-state">${toggle ? 'ON' : 'HOVER / TOUCH'}</span></div><div class="preview-stage"></div><div class="preview-bottom"><span>${toggle ? 'CLICK OR DRAG' : 'MOVE YOUR POINTER'}</span><div class="background-picker" aria-label="プレビューの背景"><button type="button" data-bg="studio" aria-label="展示の背景" title="展示の背景"></button><button type="button" data-bg="dark" aria-label="黒い背景" title="黒い背景"></button><button type="button" data-bg="light" aria-label="明るい背景" title="明るい背景"></button></div></div></div>${toggle ? `<div class="preview-controls"><div class="state-segments" aria-label="プレビューの状態"><button type="button" data-state="off">OFF</button><button type="button" data-state="on">ON</button></div><button type="button" class="small-button" id="preview-loop" aria-pressed="false">${utils_1.icon('play')}ループ</button><button type="button" class="icon-button" id="reset-preview" aria-label="初期状態に戻す">${utils_1.icon('reset')}</button></div><label class="disabled-control"><input type="checkbox" id="preview-disabled"><span>無効状態を確認する</span></label>` : `<p class="surface-note">中身は自由に差し替えられます。<br>展示用の文字や番号はパーツ本体に含みません。</p>`}<p class="preview-description">${utils_1.escapeHTML(part.description)}</p><dl class="part-facts"><div><dt>CATEGORY</dt><dd>${toggle ? 'Toggle / スイッチ' : 'Surface / コンテナ'}</dd></div><div><dt>MOTION</dt><dd>${utils_1.escapeHTML(part.motion)}</dd></div><div><dt>VERSION</dt><dd>${utils_1.escapeHTML(part.version)}</dd></div><div><dt>RUNTIME</dt><dd>${toggle ? 'CSS + SVG / Canvas' : 'CSS + Pointer'}</dd></div></dl><div class="related-box"><span class="section-kicker">${toggle ? 'PAIR IT WITH' : 'RELATED PART'}</span>${part.related.map(id => { const p = parts.find(p => p.id === id); return p ? `<button type="button" data-related="${id}"><span>${utils_1.escapeHTML(p.name)}<small>${id === 'original-surface' ? 'この展示に使っている背景' : '組み合わせて使うパーツ'}</small></span>${utils_1.icon('arrow')}</button>` : ''; }).join('')}</div></aside><section class="detail-main"><div class="detail-tabs" role="tablist" aria-label="詳細情報"><button id="tab-code" type="button" role="tab" aria-controls="detail-pane" data-detail-tab="code">${utils_1.icon('code')}コード<span>CODE</span></button><button id="tab-guide" type="button" role="tab" aria-controls="detail-pane" data-detail-tab="guide">${utils_1.icon('book')}使い方</button><button id="tab-prompt" type="button" role="tab" aria-controls="detail-pane" data-detail-tab="prompt">${utils_1.icon('spark')}AI用プロンプト</button></div><div class="format-area"><div class="format-buttons" aria-label="実装形式">${Object.entries(types_1.FORMATS).map(([key, value]) => `<button type="button" data-format="${key}" aria-pressed="false">${value.short}</button>`).join('')}</div><p id="format-note"></p></div><div id="detail-pane" role="tabpanel"></div><footer class="detail-actions"><span id="package-label"></span><span class="package-hint">依存ファイル・使用例をまとめて取得</span><button type="button" class="solid-button" id="download-part">${utils_1.icon('down')}パーツZIP</button></footer></section></div></div>`;
        utils_2.required('.close-detail', dialog).addEventListener('click', close);
        utils_2.required('#previous-part', dialog).addEventListener('click', () => callbacks.onNavigate(parts[(parts.indexOf(part) - 1 + parts.length) % parts.length].id));
        utils_2.required('#next-part', dialog).addEventListener('click', () => callbacks.onNavigate(parts[(parts.indexOf(part) + 1) % parts.length].id));
        const activate = (button) => { tab = button.dataset.detailTab; drawMain(); };
        const tabs = utils_2.required('.detail-tabs', dialog);
        tabs.querySelectorAll('button').forEach(b => b.addEventListener('click', () => activate(b)));
        utils_1.wireTabs(tabs, activate);
        dialog.querySelectorAll('[data-format]').forEach(b => b.addEventListener('click', () => {
            format = b.dataset.format;
            try {
                localStorage.setItem('sop-format', format);
            }
            catch { }
            drawMain();
        }));
        dialog.querySelectorAll('[data-related]').forEach(b => b.addEventListener('click', () => callbacks.onNavigate(b.dataset.related ?? '')));
        utils_2.required('#download-part', dialog).addEventListener('click', event => void downloadPackage(event.currentTarget));
        const stage = utils_2.required('.preview-stage', dialog);
        stage.innerHTML = part.markup;
        const root = stage.firstElementChild;
        root.dataset.demoRoot = '';
        samples_1.fillSample(root, part);
        if (!wasOpen) {
            document.body.classList.add('details-open');
            dialog.showModal();
            callbacks.onActive(true);
        }
        controller = registry_generated_1.mounts[part.id](root, part.category === 'toggles' ? { checked: part.initial, onCheckedChange: updatePreviewState } : {});
        if (toggle) {
            updatePreviewState();
            root.addEventListener('pointerdown', stopLoop);
            root.addEventListener('sop:change', () => { stopLoop(); updatePreviewState(); });
            dialog.querySelectorAll('[data-state]').forEach(b => b.addEventListener('click', () => { stopLoop(); controller?.setChecked?.(b.dataset.state === 'on'); updatePreviewState(); }));
            utils_2.required('#reset-preview', dialog).addEventListener('click', () => { stopLoop(); controller?.setChecked?.(part.initial); updatePreviewState(); });
            utils_2.required('#preview-loop', dialog).addEventListener('click', () => {
                if (loop) {
                    stopLoop();
                    return;
                }
                const tick = () => { controller?.setChecked?.(!controller?.getChecked?.()); updatePreviewState(); };
                tick();
                loop = window.setInterval(tick, 1500);
                utils_2.required('#preview-loop', dialog).setAttribute('aria-pressed', 'true');
            });
            utils_2.required('#preview-disabled', dialog).addEventListener('change', event => {
                const disabled = event.target.checked;
                stopLoop();
                root.disabled = disabled;
                controller?.cancelInteraction?.();
                dialog.querySelectorAll('[data-state],#preview-loop,#reset-preview').forEach(b => b.disabled = disabled);
            });
        }
        const setBackground = () => {
            const view = utils_2.required('.live-preview', dialog);
            view.classList.remove('bg-studio', 'bg-dark', 'bg-light');
            view.classList.add('bg-' + background);
            dialog.querySelectorAll('[data-bg]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.bg === background)));
        };
        dialog.querySelectorAll('[data-bg]').forEach(b => b.addEventListener('click', () => { background = b.dataset.bg ?? 'studio'; setBackground(); }));
        setBackground();
        drawMain();
        if (!wasOpen)
            utils_2.required('.close-detail', dialog).focus({ preventScroll: true });
    }
    return { open, close, isOpen: () => dialog.open };
}
