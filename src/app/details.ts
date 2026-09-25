import {mountGlassControls} from './liquid-glass-preview';
import {mountWorkbenchControls} from './workbench-preview';
import {mountSignatureControls} from './signature-preview';
import {mountFoundationControls} from './foundation-preview';
import {mountCheckPopupControls,checkPopupGuide} from './check-popup-preview';
import {mountSelectionControls,selectionGuide} from './selection-preview';
import {mountActionControls,actionGuide} from './action-preview';
import {mountTextFieldControls,textFieldGuide} from './textfield-preview';
import { mountDisclosureControls, disclosureGuide } from './disclosure-preview';
import { fillSample } from './samples';
import { highlightedLines, mountCodeViewer } from './code-viewer';
import { loadCategory, loadPart, CategoryLoadError } from '../catalog/browser';
import { getDelivery, buildPrompt, placementText } from '../catalog/delivery';
import { FORMATS, LAYOUTS, isLayout, DESIGN_TYPES } from '../catalog/types';
import { copyText, escapeHTML, icon, required, trapDialogFocus, wireTabs } from './utils';
import { showPackageDownload } from './package-download';
import type { Part, PartSummary, Format, Layout, DetailTab, PartController } from '../catalog/types';
import { isFormat, isDetailTab } from '../catalog/types';
export function createDetails(parts: PartSummary[], callbacks: {onActive: (active: boolean) => void; onNavigate: (id: string, trigger?: HTMLElement) => void}) {
    const dialog = required<HTMLDialogElement>('#part-details');
    trapDialogFocus(dialog);
    if (!parts.length)
        throw new Error('The part library must not be empty.');
    let part: Part;
    let request = 0;
    let layout: Layout = 'portable';
    let format: Format = 'tsx', tab: DetailTab = 'code', controller: PartController | null = null;
    let origin: HTMLElement | null = null;
    let loop = 0, copiedWithCode = true;
    let cleanupAction: (()=>void)|undefined;
    const sourceNames: Record<string, string> = {};
    let background = 'studio';
    try {
        const savedLayout = localStorage.getItem('sop-layout');
        if (isLayout(savedLayout)) layout = savedLayout;
        const saved = localStorage.getItem('sop-format');
        if (isFormat(saved))
            format = saved;
    }
    catch { }
    const stopLoop = () => { clearInterval(loop); loop = 0; dialog.querySelector('#preview-loop')?.setAttribute('aria-pressed', 'false'); };
    function destroyPreview() { stopLoop(); cleanupAction?.(); cleanupAction=undefined; controller?.destroy(); controller = null; }
    function close() {
        request++;
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
        request++;
        const notice = dialog.querySelector('#toast');
        if (notice) {
            notice.classList.remove('visible');
            document.body.append(notice);
        }
        destroyPreview();
        callbacks.onActive(false);
        document.body.classList.remove('details-open');
        if (location.hash.startsWith('#part=') || location.hash.startsWith('#sop-demo-'))
            history.replaceState(null, '', '#collection');
        if (origin?.isConnected)
            origin.focus({ preventScroll: true });
    });
    const delivery = () => getDelivery(part, format, layout);
    const promptText = () => buildPrompt(part, format, layout, copiedWithCode);
    function downloadPackage(button: HTMLElement) {
        showPackageDownload(part, format, layout, copiedWithCode, button);
    }
    function drawMain() {
        const exported = delivery();
        required<HTMLSelectElement>('#export-layout', dialog).value = layout;
        required('#layout-note', dialog).textContent = layout === 'portable'
            ? `本体: ${exported.componentRoot}/ · 内部の依存をまとめて移動できます。`
            : '配布元のパスを保持。既存のsharedへ上書きせず、専用フォルダーへ配置してください。';
        dialog.querySelectorAll<HTMLButtonElement>('[data-detail-tab]').forEach(b => {
            const active = b.dataset.detailTab === tab;
            b.setAttribute('aria-selected', String(active));
            b.tabIndex = active ? 0 : -1;
        });
        dialog.querySelectorAll<HTMLButtonElement>('[data-format]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.format === format)));
        required('#format-note', dialog).textContent = FORMATS[format].note;
        const pane = required('#detail-pane', dialog);
        pane.className = `detail-pane pane-${tab}`;
        pane.setAttribute('aria-labelledby', `tab-${tab}`);
        if (tab === 'code')
            mountCodeViewer(pane, exported.files, { selected: exported.files.find(f => f.sourceName === sourceNames[part.id])?.name, onSelect: (name: string) => { sourceNames[part.id] = exported.files.find(f => f.name === name)?.sourceName ?? ''; } });
        if (tab === 'guide') {
            const sample = exported.files.find(f => f.name === exported.example);
            const react = format === 'tsx' || format === 'jsx';
            const options = react || part.tags.includes('GLASS LAB') || part.foundation || part.signature || part.workbench ? part.props : (part.category==='checkboxes'||part.category==='popups') ? checkPopupGuide(part.category) : (part.category === 'buttons' || part.category === 'links') ? actionGuide(part.category) : part.category === 'textboxes' ? textFieldGuide() : (part.category === 'dropdowns' || part.category === 'accordions' || part.category === 'scrollbars' || part.category === 'tabs' || part.category === 'segments') ? (part.category==='tabs'||part.category==='segments' ? selectionGuide(part.category) : disclosureGuide(part.category)) : part.category === 'toggles' ? [
                ['init(element, options)', 'HTMLButtonElement', '対象のボタンを渡して初期化します。'],
                ['options.checked', 'boolean', '初期のON/OFF状態。'],
                ['options.onCheckedChange', '(checked: boolean) => void', '操作による状態変更を受け取ります。'],
                ['controller.setChecked(value)', 'boolean', '外部のアプリ状態に合わせて切り替えます。'],
                ['element.disabled', 'boolean', 'ボタンの標準プロパティで操作を無効にします。'],
                ['controller.destroy()', 'void', '取り外す前に描画・監視・イベントを解除します。']
            ] : [
                ['.sop-surface-content', 'HTML', 'この中に文章やボタンなどの内容を配置します。'],
                ['init(element, options)', 'HTMLElement', 'ブロックのルート要素を渡して初期化します。'],
                ...(part.runtime === 'CSS only' ? [] : [['options.tilt / intensity', 'boolean / number', '傾きの有効化と強さを変更します。']]),
                ['--sop-padding', 'CSSカスタムプロパティ', '中身の余白を指定します。初期値28px。'],
                ['controller.destroy()', 'void', '取り外す前にイベントと描画を解除します。']
            ];
            pane.innerHTML = `<div class="guide-scroll"><div class="section-kicker">FROM GALLERY TO YOUR PROJECT</div><h3>このパーツを、あなたの開発へ。</h3><p class="guide-lead">${react ? 'コンポーネントとCSS、必要な共通処理をまとめて配置します。' : 'HTMLとCSSを配置して、対象の要素を初期化します。'}展示枠やギャラリーのUIは持ち込まれません。</p><div class="guide-step"><span>01</span><div><h4>本体フォルダーを配置</h4><p>下の「パーツZIP」で、${FORMATS[format].label}版の${exported.files.length}ファイルと独立デモを取得できます。${escapeHTML(placementText(exported))}</p></div></div><div class="delivery-paths"><span>ENTRY</span><code>${escapeHTML(exported.entry)}</code><span>CSS</span><code>${escapeHTML(exported.stylesheet)}</code><span>DEPENDENCIES</span><code>${escapeHTML(exported.externalDependencies.join(', ') || 'なし')}</code></div><div class="guide-step"><span>02</span><div><h4>${react ? 'importして、状態や中身を渡す' : '初期化し、取り外すときは後片付け'}</h4><p>${react ? 'Reactを導入済みのプロジェクトで使います。CSSはコンポーネントから読み込みます。' : part.runtime === 'CSS only' ? 'このブロックはHTMLとCSSだけで外観が成立します。initは共通の初期化契約を使う場合の任意の窓口です。' : 'init(element)の返り値を保存し、部品を取り外すときにdestroy()を呼びます。'}${format === 'ts' ? ' TypeScriptを変換できるビルド環境が必要です。' : ''}</p></div></div>${sample ? `<div class="example-block"><header><span>${escapeHTML(sample.name)}</span><button type="button" class="small-button" id="copy-example">${icon('copy')}使用例をコピー</button></header><pre><code>${highlightedLines(sample.code, sample.language)}</code></pre></div>` : ''}<div class="guide-step"><span>03</span><div><h4>必要な設定だけを変更</h4><p>素材感や動きを保ったまま、アプリの状態、内容、配置を接続します。使用例のパスはZIP内での接続例です。移動した使用例のimportも利用先に合わせてください。</p></div></div><div class="props-table"><table><thead><tr><th>設定</th><th>型 / 値</th><th>役割</th></tr></thead><tbody>${options.map(p => `<tr><td><code>${escapeHTML(p[0])}</code></td><td>${escapeHTML(p[1])}</td><td>${escapeHTML(p[2])}</td></tr>`).join('')}</tbody></table></div><div class="guide-note"><b>既存プロジェクトを壊さずに組み込む</b><p>examples/とpreview/は参考用です。既存のApp・main・設定ファイルへ上書きしないでください。同名のinternal処理も名前だけで統合しません。複数配置、無効状態、キーボード、動きを減らす設定。Reactでは画面の表示・取り外し時にも動作を確認してください。効果音は展示専用の任意機能で、パーツの必須依存ではありません。</p></div>${part.category === 'toggles' ? `<button type="button" class="related-inline" data-related="original-surface">${icon('arrow')}今の背景も使う — Original Surface</button>` : ''}</div>`;
            pane.querySelector('#copy-example')?.addEventListener('click', event => sample && void copyText(sample.code, event.currentTarget as HTMLElement, sample.name));
            pane.querySelector('[data-related]')?.addEventListener('click', () => callbacks.onNavigate('original-surface'));
        }
        if (tab === 'prompt') {
            pane.innerHTML = `<div class="prompt-scroll"><div class="section-kicker">TAKE THE INTENTION WITH YOU</div><h3>見た目だけでなく、意図も渡す。</h3><p class="guide-lead">配置と接続は利用先に合わせ、外観と動きは守る。既存プロジェクトの確認・上書き防止・検証まで含む指示です。</p><div class="prompt-modes"><button type="button" data-prompt-mode="full" aria-pressed="${copiedWithCode}">${icon('code')}<span><b>コード込み</b><small>再現性を優先する標準形式</small></span><i>推奨</i></button><button type="button" data-prompt-mode="spec" aria-pressed="${!copiedWithCode}">${icon('spark')}<span><b>再現仕様のみ</b><small>別の構成で作り直すときに</small></span></button></div><div class="prompt-toolbar"><span id="prompt-size"></span><button type="button" class="small-button" id="copy-prompt">${icon('copy')}プロンプトをコピー</button></div><textarea id="prompt-text" readonly spellcheck="false" aria-label="AI用の再現・組み込みプロンプト"></textarea><p class="prompt-caution">選択中の構成と同じパス・コードを含みます。対象プロジェクトを参照できないAIには、必要な構成情報の提示を求めるよう指示します。AIの出力そのものを保証するものではありません。APIへの送信は行いません。</p></div>`;
            const text = promptText();
            required<HTMLTextAreaElement>('#prompt-text', pane).value = text;
            required('#prompt-size', pane).textContent = `${text.length.toLocaleString()} characters · ${FORMATS[format].short}`;
            required('#copy-prompt', pane).addEventListener('click', event => void copyText(promptText(), event.currentTarget as HTMLElement, 'AI用プロンプト'));
            pane.querySelectorAll<HTMLButtonElement>('[data-prompt-mode]').forEach(button => button.addEventListener('click', () => { copiedWithCode = button.dataset.promptMode === 'full'; drawMain(); pane.querySelector<HTMLElement>(`[data-prompt-mode="${copiedWithCode ? 'full' : 'spec'}"]`)?.focus(); }));
        }
        required('#package-label', dialog).textContent = `${exported.files.length} FILES · ${format.toUpperCase()} · ${LAYOUTS[layout].label}`;
    }
    function updatePreviewState() {
        const state = controller?.getChecked?.() ?? false;
        required('#detail-state', dialog).textContent = state ? 'ON' : 'OFF';
        dialog.querySelectorAll<HTMLButtonElement>('[data-state]').forEach(b => b.setAttribute('aria-pressed', String((b.dataset.state === 'on') === state)));
    }
    async function open(id: string, trigger?: HTMLElement) {
        const summary = parts.find(p => p.id === id);
        if (!summary) return;
        const token = ++request;
        const wasOpen = dialog.open;
        destroyPreview();
        if (!wasOpen) {
            origin = trigger ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
            tab = 'code';
        }
        dialog.innerHTML = '<div class="detail-loading"><button class="small-button close-detail" type="button">閉じる</button><h2 id="detail-title">'+escapeHTML(summary.name)+'</h2><p role="status">パーツを読み込んでいます…</p></div>';
        required('.close-detail', dialog).addEventListener('click', close);
        if (!wasOpen) { document.body.classList.add('details-open'); dialog.showModal(); callbacks.onActive(true); }
        required('.close-detail', dialog).focus({preventScroll:true});
        let loaded;
        try {
            const result = await Promise.all([loadPart(id), loadCategory(summary.category)]);
            if (token !== request || !dialog.open) return;
            part = result[0]; loaded = result[1];
        } catch (error) {
            if (token !== request || !dialog.open) return;
            dialog.querySelector('[role="status"]')!.textContent = '読み込めませんでした。通信を確認して再試行してください。';
            const retry = document.createElement('button'); retry.type = 'button'; retry.className = 'small-button'; retry.textContent = error instanceof CategoryLoadError ? '再読み込み' : '再試行';
            retry.addEventListener('click', () => { if (error instanceof CategoryLoadError) location.reload(); else void open(id, trigger); }); dialog.querySelector('.detail-loading')!.append(retry);
            return;
        }
        const mounts = loaded.mounts;
        const foundation=!!part.foundation, signature=!!part.signature, workbench=!!part.workbench;
        const toggle = part.category === 'toggles', ornament = part.category === 'ornaments';
        const scroll = part.category === 'scrollbars';
        const dropdown = part.category === 'dropdowns', accordion = part.category === 'accordions', textbox = part.category === 'textboxes', action = part.category === 'buttons', link = part.category === 'links', tabPart = part.category === 'tabs', segments = part.category === 'segments', checkbox = part.category === 'checkboxes', popup = part.category === 'popups';
        dialog.innerHTML = `<div class="detail-shell"><header class="detail-top"><div class="detail-breadcrumb"><span class="mini-brand" aria-hidden="true">◒</span>THE COLLECTION<span>/</span>${(workbench || signature || foundation) ? escapeHTML(part.category.toUpperCase()) : toggle ? 'TOGGLES' : scroll ? 'SCROLLBARS' : dropdown ? 'DROPDOWNS' : accordion ? 'ACCORDIONS' : textbox ? 'TEXT FIELDS' : action ? 'BUTTONS' : link ? 'LINKS' : tabPart ? 'TABS' : segments ? 'SEGMENTS' : checkbox ? 'CHECKBOXES' : popup ? 'POPUPS' : ornament ? 'ORNAMENTS' : 'SURFACES'}<span>/</span><strong>${escapeHTML(part.id)}</strong></div><div class="detail-nav"><button type="button" class="icon-button" id="previous-part" aria-label="前のパーツ">${icon('left')}</button><button type="button" class="icon-button" id="next-part" aria-label="次のパーツ">${icon('right')}</button><span class="nav-divider"></span><button type="button" class="icon-button close-detail" aria-label="詳細を閉じる">${icon('close')}</button></div></header><div class="detail-body"><aside class="preview-sidebar"><div class="preview-heading"><span class="section-kicker">${String(part.order).padStart(2, '0')} / ${escapeHTML(part.material)}</span><span class="detail-design design-${part.designType}">${DESIGN_TYPES[part.designType].label}</span><h2 id="detail-title">${escapeHTML(part.name)}</h2><p>${escapeHTML(part.tagline)}</p></div><div class="live-preview ${workbench ? 'workbench-preview workbench-'+part.category : signature ? 'signature-preview signature-'+part.category : foundation ? 'foundation-preview foundation-'+part.category : toggle ? 'toggle-preview' : scroll ? 'scroll-preview' : dropdown ? 'dropdown-preview' : accordion ? 'accordion-preview' : textbox ? 'textbox-preview' : action ? 'action-preview' : link ? 'link-preview' : tabPart ? 'tabs-preview' : segments ? 'segments-preview' : checkbox ? 'checkbox-preview' : popup ? 'popup-preview' : ornament ? 'ornament-preview' : 'block-preview'} bg-${background}" data-preview-part="${escapeHTML(part.id)}"><div class="preview-status"><span><i></i>LIVE PREVIEW</span><span id="detail-state">${toggle ? 'ON' : scroll ? '0%' : dropdown ? 'SELECT' : accordion ? '1 OPEN' : textbox ? 'WRITE' : action ? 'READY' : link ? 'LINK' : tabPart ? 'EXPLORE' : segments ? 'CHOOSE' : ornament ? 'AMBIENT' : part.runtime === 'CSS only' ? 'STATIC SURFACE' : 'HOVER / TOUCH'}</span></div><div class="preview-stage"></div><div class="preview-bottom"><span>${workbench ? 'EXPLORE / ACT / NAVIGATE' : toggle ? 'CLICK OR DRAG' : scroll ? 'SCROLL / SWIPE / DRAG' : dropdown ? 'OPEN / CHOOSE / CONFIRM' : accordion ? 'OPEN / READ / EXPLORE' : textbox ? 'TYPE / EDIT / EXPLORE' : action ? 'CLICK / PRESS / RESPOND' : link ? 'HOVER / FOLLOW THE ARROW' : tabPart ? 'SELECT / READ / EXPLORE' : segments ? 'CHOOSE / CHANGE / ADAPT' : checkbox ? 'CLICK / SPACE / CHECK' : popup ? 'OPEN / READ / INTERACT' : ornament ? 'DECORATIVE / AMBIENT' : part.runtime === 'CSS only' ? 'CONTENT IS YOURS' : 'MOVE YOUR POINTER'}</span><div class="background-picker" aria-label="プレビューの背景"><button type="button" data-bg="studio" aria-label="展示の背景" title="展示の背景"></button><button type="button" data-bg="dark" aria-label="黒い背景" title="黒い背景"></button><button type="button" data-bg="light" aria-label="明るい背景" title="明るい背景"></button></div></div></div>${toggle ? `<div class="preview-controls"><div class="state-segments" aria-label="プレビューの状態"><button type="button" data-state="off">OFF</button><button type="button" data-state="on">ON</button></div><button type="button" class="small-button" id="preview-loop" aria-pressed="false">${icon('play')}ループ</button><button type="button" class="icon-button" id="reset-preview" aria-label="初期状態に戻す">${icon('reset')}</button></div><label class="disabled-control"><input type="checkbox" id="preview-disabled"><span>無効状態を確認する</span></label>` : scroll ? `<div class="scroll-preview-controls"><label>方向<select id="scroll-orientation" aria-label="スクロール方向"><option value="vertical">縦方向</option><option value="horizontal">横方向</option></select></label><div class="scroll-jumps" aria-label="スクロール位置"><button type="button" data-jump="0">先頭</button><button type="button" data-jump="0.5">中央</button><button type="button" data-jump="1">末尾</button></div><button type="button" class="small-button" id="scroll-short" aria-pressed="false">短い内容で確認</button></div><p class="surface-note">実際の内容をネイティブにスクロール。<br>この領域だけを装飾し、ページ全体は変更しません。</p>` : `${ornament ? '<p class="surface-note">意味を持たない装飾パーツです。<br>余白や区切りのアクセントとして配置できます。</p>' : '<p class="surface-note">中身は自由に差し替えられます。<br>展示用の文字や番号はパーツ本体に含みません。</p>'}`}<p class="preview-description">${escapeHTML(part.description)}</p><dl class="part-facts"><div><dt>CATEGORY</dt><dd>${workbench ? escapeHTML(part.category.toUpperCase()) : signature ? escapeHTML(part.category.toUpperCase()) : foundation ? escapeHTML(part.category) : toggle ? 'Toggle / スイッチ' : scroll ? 'Scrollbar / スクロール領域' : dropdown ? 'Dropdown / 選択' : accordion ? 'Accordion / 開閉' : textbox ? 'Text field / 入力' : action ? 'Button / 実行操作' : link ? 'Link / 移動' : tabPart ? 'Tabs / 内容の切り替え' : segments ? 'Segment / 単一選択' : checkbox ? 'Checkbox / 複数選択' : popup ? 'Popup / モーダル' : ornament ? 'Ornament / 装飾' : 'Surface / コンテナ'}</dd></div><div><dt>MOTION</dt><dd>${escapeHTML(part.motion)}</dd></div><div><dt>VERSION</dt><dd>${escapeHTML(part.version)}</dd></div><div><dt>RUNTIME</dt><dd>${escapeHTML(part.runtime)}</dd></div></dl><div class="related-box"><span class="section-kicker">${toggle ? 'PAIR IT WITH' : 'RELATED PART'}</span>${part.related.map(id => { const p = parts.find(p => p.id === id); return p ? `<button type="button" data-related="${id}"><span>${escapeHTML(p.name)}<small>${id === 'original-surface' ? 'この展示に使っている背景' : '組み合わせて使うパーツ'}</small></span>${icon('arrow')}</button>` : ''; }).join('')}</div></aside><section class="detail-main"><div class="detail-tabs" role="tablist" aria-label="詳細情報"><button id="tab-code" type="button" role="tab" aria-controls="detail-pane" data-detail-tab="code">${icon('code')}コード<span>CODE</span></button><button id="tab-guide" type="button" role="tab" aria-controls="detail-pane" data-detail-tab="guide">${icon('book')}使い方</button><button id="tab-prompt" type="button" role="tab" aria-controls="detail-pane" data-detail-tab="prompt">${icon('spark')}AI用プロンプト</button></div><div class="format-area"><div class="export-controls"><div class="format-buttons" aria-label="実装形式">${Object.entries(FORMATS).map(([key, value]) => `<button type="button" data-format="${key}" aria-pressed="false">${value.short}</button>`).join('')}</div><label class="layout-control"><span>配置</span><select id="export-layout" aria-label="配布ファイルの構成"><option value="portable">導入向け（推奨）</option><option value="original">元の構成</option></select></label></div><p id="format-note"></p><p id="layout-note" class="layout-note" role="status"></p></div><div id="detail-pane" role="tabpanel"></div><footer class="detail-actions"><span id="package-label"></span><span class="package-hint">依存ファイル・使用例をまとめて取得</span><button type="button" class="solid-button" id="download-part">${icon('down')}パーツZIP</button></footer></section></div></div>`;
        required('.close-detail', dialog).addEventListener('click', close);
        required('#previous-part', dialog).addEventListener('click', () => callbacks.onNavigate(parts[(parts.findIndex(p => p.id === part.id) - 1 + parts.length) % parts.length].id));
        required('#next-part', dialog).addEventListener('click', () => callbacks.onNavigate(parts[(parts.findIndex(p => p.id === part.id) + 1) % parts.length].id));
        const activate = (button: HTMLElement) => { const next = button.dataset.detailTab; if (isDetailTab(next)) { tab = next; drawMain(); } };
        const tabs = required('.detail-tabs', dialog);
        tabs.querySelectorAll('button').forEach(b => b.addEventListener('click', () => activate(b)));
        wireTabs(tabs, activate);
        required<HTMLSelectElement>('#export-layout', dialog).addEventListener('change', event => {
            const value = (event.currentTarget as HTMLSelectElement).value;
            if (!isLayout(value)) return;
            layout = value;
            try { localStorage.setItem('sop-layout', layout); } catch { /* Optional preference. */ }
            drawMain();
        });
        dialog.querySelectorAll<HTMLButtonElement>('[data-format]').forEach(b => b.addEventListener('click', () => {
            const nextFormat = b.dataset.format;
            if (!isFormat(nextFormat)) return;
            format = nextFormat;
            try {
                localStorage.setItem('sop-format', format);
            }
            catch { }
            drawMain();
        }));
        dialog.querySelectorAll<HTMLElement>('[data-related]').forEach(b => b.addEventListener('click', () => callbacks.onNavigate(b.dataset.related ?? '')));
        required('#download-part', dialog).addEventListener('click', event => void downloadPackage(event.currentTarget as HTMLElement));
        const stage = required('.preview-stage', dialog);
        stage.innerHTML = part.markup;
        const root = stage.firstElementChild;
        if (!(root instanceof HTMLElement)) throw new Error(`Invalid markup: ${part.id}`);
        root.dataset.demoRoot = '';
        fillSample(root, part);
        controller = mounts[part.id](root, toggle ? { checked: part.initial, onCheckedChange: updatePreviewState } : scroll ? { onProgressChange: value => { required('#detail-state', dialog).textContent = Math.round(value * 100) + '%'; } } : {});
        if (workbench) cleanupAction=mountWorkbenchControls(dialog,root,part,controller);
        if (signature) cleanupAction=mountSignatureControls(dialog,root,part,controller);
        if (foundation) cleanupAction=mountFoundationControls(dialog,root,part,controller);
        if (dropdown || accordion) mountDisclosureControls(dialog, root, part, controller);
        if (textbox) mountTextFieldControls(dialog,root,controller);
        if(checkbox || popup) cleanupAction = mountCheckPopupControls(dialog,root,part,controller);
        if(tabPart || segments) cleanupAction = mountSelectionControls(dialog,root,part,controller);
        if (action || link) cleanupAction = mountActionControls(dialog,root,part,controller);
        if (scroll) {
            required<HTMLSelectElement>('#scroll-orientation',dialog).addEventListener('change',event => {
                const next = (event.currentTarget as HTMLSelectElement).value === 'horizontal' ? 'horizontal' : 'vertical';
                controller?.setOrientation?.(next);
            });
            dialog.querySelectorAll<HTMLButtonElement>('[data-jump]').forEach(button => button.addEventListener('click',() => controller?.scrollTo?.(Number(button.dataset.jump))));
            required('#scroll-short',dialog).addEventListener('click', event => {
                const button = event.currentTarget as HTMLButtonElement;
                const short = button.getAttribute('aria-pressed') !== 'true';
                button.setAttribute('aria-pressed',String(short));
                button.textContent = short ? '長い内容に戻す' : '短い内容で確認';
                if (short) required('.sop-scroll-content',root).innerHTML = '<p class="scroll-short-copy">短い内容では、スクロールバーは表示されません。</p>';
                else fillSample(root,part);
                controller?.scrollTo?.(0); controller?.refresh?.();
            });
        }
        if (toggle && root instanceof HTMLButtonElement) {
            updatePreviewState();
            root.addEventListener('pointerdown', stopLoop);
            root.addEventListener('sop:change', () => { stopLoop(); updatePreviewState(); });
            dialog.querySelectorAll<HTMLButtonElement>('[data-state]').forEach(b => b.addEventListener('click', () => { stopLoop(); controller?.setChecked?.(b.dataset.state === 'on'); updatePreviewState(); }));
            required('#reset-preview', dialog).addEventListener('click', () => { stopLoop(); controller?.setChecked?.(part.initial ?? false); updatePreviewState(); });
            required('#preview-loop', dialog).addEventListener('click', () => {
                if (loop) {
                    stopLoop();
                    return;
                }
                const tick = () => { controller?.setChecked?.(!controller?.getChecked?.()); updatePreviewState(); };
                tick();
                loop = window.setInterval(tick, 1500);
                required('#preview-loop', dialog).setAttribute('aria-pressed', 'true');
            });
            required('#preview-disabled', dialog).addEventListener('change', event => {
                const disabled = (event.currentTarget as HTMLInputElement).checked;
                stopLoop();
                root.disabled = disabled;
                controller?.cancelInteraction?.();
                dialog.querySelectorAll<HTMLButtonElement>('[data-state],#preview-loop,#reset-preview').forEach(b => b.disabled = disabled);
            });
        }
        const setBackground = (selectedScene?: string) => {
            if(selectedScene) background=selectedScene==='paper'?'light':selectedScene==='ink'?'dark':'studio';
            const scene=selectedScene??(background==='light'?'paper':background==='dark'?'ink':'coast');
            const view = required('.live-preview', dialog);
            view.classList.remove('bg-studio', 'bg-dark', 'bg-light');
            view.classList.add('bg-' + (part.tags.includes('GLASS LAB') ? 'studio' : background));
            dialog.querySelectorAll<HTMLButtonElement>('[data-bg]').forEach(b => b.setAttribute('aria-pressed', String(scene!=='grid'&&b.dataset.bg === background)));
            if(part.tags.includes('GLASS LAB')){
                root.parentElement!.dataset.lgScene=scene;
                const sceneSelect=dialog.querySelector<HTMLSelectElement>('[data-glass-scene]');if(sceneSelect)sceneSelect.value=scene;
                const appearance=scene==='paper'?'light':'dark';controller?.updateGlass?.({appearance});
                const appearanceSelect=dialog.querySelector<HTMLSelectElement>('[data-glass-setting="appearance"]');if(appearanceSelect)appearanceSelect.value=appearance;
            }
        };
        dialog.querySelectorAll<HTMLButtonElement>('[data-bg]').forEach(b => b.addEventListener('click', () => { background = b.dataset.bg ?? 'studio'; setBackground(); }));
        setBackground();
        if(part.tags.includes('GLASS LAB') && controller){const prior=cleanupAction,cleanup=mountGlassControls(dialog,root,controller,setBackground);cleanupAction=()=>{prior?.();cleanup();};}
        drawMain();
        required('.close-detail', dialog).focus({ preventScroll: true });
    }
    return { open, close, isOpen: () => dialog.open };
}
