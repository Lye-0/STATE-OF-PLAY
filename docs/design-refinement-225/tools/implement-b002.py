from pathlib import Path
import json
rows=json.load(open('docs/design-refinement-225/targets.json'));by={p['number']:p for p in rows}
def add(n,css):
 p=Path(by[n]['base'])/'styles.css';s=p.read_text();# Place refinements before accessibility overrides so system color and motion contracts win.
 marker='@media(prefers-reduced-motion:reduce)';idx=s.find(marker)
 if n in [65,66,71]:idx=len(s) # Explicit accessibility reinforcement follows below.
 s=s[:idx]+css+'\n'+s[idx:];p.write_text(s)
add(33,'''/* A carved cork perimeter surrounds a recessed, quiet writing face. */
.sop-surface.sop-contoured-cork-panel{background:radial-gradient(ellipse at 20% 25%,#72523955 0 1px,transparent 1.8px) 0 0/11px 17px,radial-gradient(ellipse at 65% 70%,#f0d2a677 0 1.5px,transparent 2px) 3px 5px/17px 13px,#b48c62;border:0;border-radius:44px 12px 36px 16px;box-shadow:0 4px 0 #73553d;--sop-padding:30px 26px}
.sop-surface.sop-contoured-cork-panel .sop-surface-content{margin:12px 12px 13px 28px;padding:var(--sop-padding);background:#eee4d3;border-radius:24px 4px 21px 5px;box-shadow:inset 0 2px 2px #62492c38;color:#352e28}
.sop-surface.sop-contoured-cork-panel .sop-surface-art i:nth-child(1){inset:7px;border:1px solid #e4c7a280;box-shadow:none}
.sop-surface.sop-contoured-cork-panel .sop-surface-art i:nth-child(2){left:12px;top:22px;bottom:22px;width:6px;background:repeating-linear-gradient(170deg,#6d4d34 0 1px,#d1af8655 1px 7px);transform:none;opacity:.75}
.sop-surface.sop-contoured-cork-panel .sop-surface-art i:nth-child(3){display:none}
.sop-surface.sop-contoured-cork-panel .sop-surface-art i:nth-child(4){left:37px;right:28px;bottom:7px;height:2px;background:#e1c39b;transform-origin:center}
''')
add(37,'''/* Compact two-column note: heading is a side label rather than a hero. */
.sop-surface.sop-compact-note-panel{background:#f4f1e9;border:1px solid #c9c1b1;border-left:3px solid #817157;border-radius:3px;--sop-padding:16px}
.sop-surface.sop-compact-note-panel .sop-surface-content{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.3fr);gap:12px 18px;align-items:start;padding:var(--sop-padding)}
.sop-surface.sop-compact-note-panel .sop-surface-content h3{font:600 15px/1.5 system-ui;margin:0;overflow-wrap:anywhere}
.sop-surface.sop-compact-note-panel .sop-surface-content p{font:13px/1.75 system-ui;margin:0;opacity:1;border-inline-start:1px solid #c9c1b1;padding-inline-start:14px;overflow-wrap:anywhere}
.sop-surface.sop-compact-note-panel .sop-surface-content>:not(h3):not(p){grid-column:1/-1}
''')
add(38,'''/* A header and a recessed content well, suited to grouped settings. */
.sop-surface.sop-cool-inset-card{background:#d6e0e7;border:1px solid #a3b4c1;border-radius:7px;box-shadow:inset 0 1px #f5f8fa;--sop-padding:18px}
.sop-surface.sop-cool-inset-card .sop-surface-content{padding:var(--sop-padding);display:grid;gap:13px}
.sop-surface.sop-cool-inset-card .sop-surface-content h3{font:600 14px/1.5 system-ui;margin:0;padding:0 3px;overflow-wrap:anywhere}
.sop-surface.sop-cool-inset-card .sop-surface-content p{font:13px/1.75 system-ui;opacity:1;margin:0;padding:17px;background:#edf2f5;border:1px solid #b5c4ce;border-radius:3px;box-shadow:inset 0 2px 3px #354d6224;overflow-wrap:anywhere}
''')
# Replace the old wheeled support composition, retaining stable label & click bounds.
p=Path(by[49]['base'])/'styles.css';s=p.read_text();a=s.index('.sop-action.sop-ivory-gasket-button{min-height:90px');b=s.index('@media(prefers-reduced-motion',a);prefix='.sop-action.sop-ivory-gasket-button';art=prefix+' .sop-action-art';s=s[:a]+f'''{prefix}{{min-height:76px;padding:21px 28px 30px;--button-ink:#35434a}}
{art} i:first-child{{inset:0 0 14px;background:#f0eadc;border:1px solid #c9c0ad;border-radius:7px 7px 3px 3px;box-shadow:inset 0 1px #fffaf0}}
{art} i:nth-child(2){{left:8px;right:8px;bottom:6px;height:11px;background:repeating-linear-gradient(0deg,#344b57 0 2px,#6b818b 2px 3px);border-radius:0 0 3px 3px;transform-origin:center bottom}}
{art} i:nth-child(3){{left:5px;right:5px;bottom:2px;height:4px;border-top:1px solid #c3d0d3;background:#80949e;border-radius:0 0 3px 3px}}
{art} i:nth-child(4){{left:13px;right:13px;bottom:14px;height:1px;background:#1f354055}}
{art} i:nth-child(5),{art} i:nth-child(6){{display:none}}
{prefix}:not(:disabled):not([aria-disabled=true]):is(:hover,:focus-visible,:active) .sop-action-art i:nth-child(2){{transform:scaleY(.64)}}

'''+s[b:];s=s.replace('象牙色の押し面から下へ出る二つの押し子を、露出したゴムの輪と銀の足が受ける。','象牙色の押し面を、一続きの細かなゴム層と薄い金属底板が受ける。');p.write_text(s)
for n in [87,88,90]:
 p=Path(by[n]['base'])/'styles.css';s=p.read_text();sel='.sop-select.sop-'+by[n]['id'];s=s.replace(sel+' .sop-select-caption{background:var(--sel-bg);color:var(--sel-ink);padding:7px 10px;border-radius:2px;line-height:1.6}',sel+' .sop-select-caption{background:transparent;color:var(--sel-ink);padding:0;border-radius:0;line-height:1.6}')
 # A unified face keeps caption contrast on both dark and light embedding pages.
 s+='\n'+sel+'{background:var(--sel-bg);border:1px solid var(--sel-line);border-radius:var(--sel-radius);padding:10px 13px 0}\n'+sel+' .sop-select-caption{margin:0;font-size:10px;letter-spacing:.045em;gap:8px}\n'+sel+' .sop-select-caption>span{display:none}\n'+sel+' .sop-select-trigger{border:0;border-radius:0;background:transparent;padding:9px 0 12px;box-shadow:none}\n'+sel+':focus-within{border-color:var(--sel-accent)}\n'
 if n==88:s+=sel+'{padding:7px 11px 0}\n'+sel+' .sop-select-trigger{min-height:44px;padding:5px 0 8px}\n'+sel+' .sop-select-value{gap:9px}\n'
 if n==90:s+=sel+' .sop-select-caption{font:500 12px/1.6 Georgia,"Yu Mincho",serif}\n'+sel+' .sop-select-trigger{border-top:1px solid var(--sel-line);margin-top:6px}\n'
 s+='@media(forced-colors:active){'+sel+'{background:Canvas;color:CanvasText;border-color:ButtonText}'+sel+' .sop-select-caption{color:CanvasText}}\n';p.write_text(s)
# Rail sculptures keep a narrow visual width and their existing broad pointer target.
for n in [65,66,71]:
 id=by[n]['id'];q='.sop-scroll-area'+('.sop-'+id)*3
 if n==65:
  css=f'''{q} .sop-scroll-handle{{background:transparent;border:0;border-radius:0;box-shadow:none;width:12px}}
{q} .sop-scroll-handle::before{{content:"";position:absolute;inset:0 4px 13px;border-inline:1px solid #d2bc8d;border-radius:3px 3px 0 0}}
{q} .sop-scroll-grip{{position:absolute;inset:auto 0 0;height:20px;background:#dbac78;clip-path:polygon(0 0,100% 0,100% 57%,35% 100%,25% 100%,50% 57%,0 57%);border:0}}
{q} .sop-scroll-track{{background:radial-gradient(circle,#bdad93 1px,transparent 1.5px) center/4px 14px}}
{q} .sop-scroll-fill{{background:#d6b990;border:0;width:1px;left:50%}}
{q}[data-orientation=horizontal] .sop-scroll-handle::before{{inset:4px 13px 4px 0;border-inline:0;border-block:1px solid #d2bc8d}}
{q}[data-orientation=horizontal] .sop-scroll-grip{{inset:0 0 0 auto;width:20px;height:auto;clip-path:polygon(0 0,57% 0,100% 65%,100% 75%,57% 50%,57% 100%,0 100%)}}
'''
 elif n==66:
  css=f'''{q} .sop-scroll-handle{{width:10px;background:linear-gradient(90deg,#6c8b9b,#f2f2e8 45%,#aec2cb 72%,#597e91);clip-path:polygon(50% 0,100% 7px,100% 60%,50% 100%,0 60%,0 7px)}}
{q} .sop-scroll-grip{{top:6px;left:3px;right:3px;height:18px;border:1px solid #2f5367;background:#263d4b;border-radius:5px}}
{q} .sop-scroll-track{{width:10px;background:repeating-linear-gradient(165deg,transparent 0 8px,#c7966b 8px 9px,transparent 9px 18px);border-inline:1px solid #526b7644;border-radius:0}}
{q} .sop-scroll-fill{{background:none;border-inline-start:1px solid #d7ae82;opacity:1}}
{q}[data-orientation=horizontal] .sop-scroll-handle{{width:100%;height:10px;clip-path:polygon(0 50%,7px 0,60% 0,100% 50%,60% 100%,7px 100%)}}
{q}[data-orientation=horizontal] .sop-scroll-grip{{top:3px;bottom:3px;left:6px;right:auto;width:18px;height:auto}}
'''
 else:
  css=f'''{q} .sop-scroll-handle{{background:linear-gradient(90deg,#3b5364 0 2px,#7894a4 2px 5px,#c0d0d7 5px 6px,#344a58 6px);clip-path:polygon(0 0,100% 0,100% calc(100% - 20px),50% 100%,0 calc(100% - 20px))}}
{q} .sop-scroll-grip::before{{height:20px;background:linear-gradient(0deg,#29353b 0 6px,#d2b187 6px 10px,#f0d7b4 10px);clip-path:polygon(0 0,100% 0,50% 100%)}}
{q} .sop-scroll-track{{left:calc(50% - 7px);background:#b8b2a5}}
{q} .sop-scroll-ticks{{display:block;position:absolute;inset:0 auto 0 calc(50% - 11px);width:6px;background:repeating-linear-gradient(0deg,#b8b2a5 0 1px,transparent 1px 16px)}}
{q} .sop-scroll-fill{{background:#d6c4a4;opacity:1}}
{q}[data-orientation=horizontal] .sop-scroll-track{{left:0;top:calc(50% - 7px)}}
{q}[data-orientation=horizontal] .sop-scroll-ticks{{inset:calc(50% - 11px) 0 auto;height:6px;width:auto;background:repeating-linear-gradient(90deg,#b8b2a5 0 1px,transparent 1px 16px)}}
{q}[data-orientation=horizontal] .sop-scroll-handle{{clip-path:polygon(0 0,calc(100% - 20px) 0,100% 50%,calc(100% - 20px) 100%,0 100%)}}
{q}[data-orientation=horizontal] .sop-scroll-grip::before{{width:20px;height:auto;background:linear-gradient(270deg,#29353b 0 6px,#d2b187 6px 10px,#f0d7b4 10px)}}
'''
 css+='@media(forced-colors:active){'+q+' .sop-scroll-rail{display:none}}\n';add(n,'\n/* Refined individual rail material. */\n'+css)
