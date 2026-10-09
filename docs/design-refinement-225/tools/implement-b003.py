from pathlib import Path
import json
rows=json.load(open('docs/design-refinement-225/targets.json'));by={p['number']:p for p in rows}
def add(n,css):
 p=Path(by[n]['base'])/'styles.css';s=p.read_text();idx=s.index('@media(prefers-reduced-motion:reduce)');p.write_text(s[:idx]+css+'\n'+s[idx:])
q='.sop-accordion.sop-loom-border-accordion.sop-loom-border-accordion'
add(96,f'''/* One woven edge and two light battens; the reading face stays dominant. */
{q} .sop-accordion-item{{padding:6px 0 22px;margin-bottom:16px}}
{q} .sop-accordion-item::before{{inset:4px 0 21px 17px;background:#f2eddf}}
{q} .sop-accordion-trigger,{q} .sop-accordion-content{{padding-left:30px;padding-right:20px}}
{q} .sop-acc-material i:nth-child(1),{q} .sop-acc-material i:nth-child(2){{height:4px;border:0;border-radius:1px;background:#ad9573}}
{q} .sop-acc-material i:nth-child(3){{left:3px;top:4px;bottom:4px;width:11px;background:repeating-linear-gradient(90deg,#c7b393 0 1px,transparent 1px 4px)}}
{q} .sop-acc-material i:nth-child(4){{display:none}}
{q} .sop-acc-material i:nth-child(5){{left:calc(50% - 22px);bottom:9px;width:44px;height:8px;background:#8c7256;border-top:1px solid #c9b594}}
{q} .sop-acc-material i:nth-child(5)::before{{top:2px;height:3px;left:15px;right:15px}}
{q} .sop-acc-material i:nth-child(6){{left:10px;right:10px;bottom:13px;background:#b4a183;height:1px}}
''')
q='.sop-accordion.sop-recess-stack-accordion.sop-recess-stack-accordion'
add(104,f'''/* A quiet ceramic edge with one consistent light direction. */
{q}{{--acc-ink:#35454b;--acc-muted:#52656c;--acc-accent:#476b7b;--acc-line:#b1c1c4}}
{q} .sop-accordion-item{{padding:7px 17px 12px 13px}}
{q} .sop-acc-material i:first-child{{background:#b9c7c9;border-radius:6px 18px 21px 10px;border-right:3px solid #81999f;border-bottom:3px solid #96aaad}}
{q} .sop-acc-material i:nth-child(2){{inset:7px 11px 9px 10px;background:#f2f3eb;border-radius:2px 12px 15px 4px;box-shadow:inset 0 1px #fffef6}}
{q} .sop-acc-material i:nth-child(3){{left:4px;width:5px;height:18px;top:calc(50% - 9px);background:#738f99;box-shadow:inset 1px 0 #d4dfe0}}
{q} .sop-acc-material i:nth-child(4){{right:3px;width:2px;top:22px;bottom:24px;background:#e0e8e5}}
{q} .sop-acc-material i:nth-child(5){{bottom:3px;height:1px;left:18px;right:25px;background:#6d858c}}
''')
# Retain native field layout/controller contracts, replace only the old material geometry.
for n in [112,114,119,121,124,125]:
 id=by[n]['id'];p=Path(by[n]['base'])/'styles.css';s=p.read_text();q='.sop-textfield'+('.sop-'+id)*2
 # All six material sections begin after the common forced-colors rule.
 idx=s.index('\n\n'+q+'{--field-bg:',s.index('@media(forced-colors'))
 common=s[:idx];qfx=q+' .sop-field-fx'
 reset=f'''\n/* Individually authored material; input, caret and clear target remain fixed. */
{qfx}{{overflow:visible;border-radius:0}}
{qfx} i{{display:block;position:absolute;inset:auto;width:auto;height:auto;border:0;border-radius:0;background:none;box-shadow:none;clip-path:none;transform:none;z-index:0}}
{qfx}::before,{qfx}::after{{display:none}}
{q} .sop-field-shell{{border:1px solid transparent;background:transparent;border-radius:0;box-shadow:none;margin:10px 0;min-height:82px;padding:16px 50px 19px 24px}}
{q} .sop-field-shell:focus-within{{border-color:transparent;box-shadow:none;outline-offset:4px}}
{q} .sop-field-control{{background:transparent}}
'''
 if n==112:
  art=f'''{q}{{--field-bg:#eef3ed;--field-ink:#304950;--field-muted:#50666c;--field-accent:#497a8b;--field-edge:#91abb3}}
{qfx} i:first-child{{inset:0;background:#94adb7;border-radius:32px 6px 32px 6px;box-shadow:inset 0 1px #d7e2e2}}
{qfx} i:nth-child(2){{inset:8px 7px 11px 9px;background:#eef3ed;border-radius:24px 3px 23px 3px;box-shadow:inset 0 2px 3px #52758533}}
{qfx} i:nth-child(3){{left:24px;right:26px;bottom:6px;height:3px;border-radius:0 0 60% 40%;background:#597e8d}}
{qfx} i:nth-child(4){{left:29px;right:19px;top:3px;height:2px;border-radius:50%;background:#e4efea;transform-origin:left}}
{q} .sop-field-shell:focus-within .sop-field-fx i:nth-child(4){{transform:scaleX(.72)}}
'''
 elif n==114:
  art=f'''{q}{{--field-bg:#ece6d9;--field-ink:#433d37;--field-muted:#665d52;--field-accent:#a17e5e;--field-edge:#b4a28b;padding-inline:12px}}
{q} .sop-field-shell{{padding-left:26px;min-height:90px;padding-bottom:23px}}
{qfx} i:first-child{{inset:3px 0 12px;background:#ece6d9;clip-path:polygon(0 0,20px 8px,calc(100% - 20px) 8px,100% 0,100% 100%,calc(100% - 20px) calc(100% - 8px),20px calc(100% - 8px),0 100%)}}
{qfx} i:nth-child(2){{left:0;top:0;bottom:2px;width:16px;background:#a58b6a;clip-path:polygon(0 0,100% 8px,100% calc(100% - 8px),0 100%);border-left:2px solid #d9c7aa}}
{qfx} i:nth-child(3){{right:0;top:0;bottom:2px;width:16px;background:#8d7459;clip-path:polygon(0 8px,100% 0,100% 100%,0 calc(100% - 8px));border-right:2px solid #c2a987}}
{qfx} i:nth-child(4){{left:19px;right:19px;bottom:8px;height:4px;background:#726253;border-radius:0 0 50% 50%;transform-origin:center}}
{q} .sop-field-shell:focus-within .sop-field-fx i:nth-child(4){{transform:scaleX(.9)}}
'''
 elif n==119:
  art=f'''{q}{{--field-bg:#f1f0e6;--field-ink:#30434c;--field-muted:#536a75;--field-accent:#6e9aaf;--field-edge:#93aab4;padding-inline:8px}}
{q} .sop-field-shell{{min-height:96px;padding:19px 50px 26px 33px}}
{qfx} i:first-child{{inset:0 0 0 0;background:#728b99;clip-path:polygon(0 0,19px 0,19px calc(100% - 16px),100% calc(100% - 16px),100% 100%,0 100%)}}
{qfx} i:nth-child(2){{inset:5px 0 21px 25px;background:#f1f0e6;clip-path:polygon(0 0,calc(100% - 11px) 0,100% 11px,100% 100%,0 100%)}}
{qfx} i:nth-child(3){{left:3px;top:7px;bottom:18px;width:11px;background:repeating-linear-gradient(0deg,#d9e5e8 0 1px,transparent 1px 8px)}}
{qfx} i:nth-child(4){{left:25px;right:8px;bottom:4px;height:8px;background:repeating-linear-gradient(90deg,#d9e5e8 0 1px,transparent 1px 10px);border-bottom:1px solid #3c5664}}
{q} .sop-field-shell:focus-within .sop-field-fx i:first-child{{background:#547a90}}
'''
 elif n==121:
  art=f'''{q}{{--field-bg:#68483f;--field-ink:#faf0df;--field-muted:#e1c8b7;--field-accent:#d6af87;--field-edge:#b99b7a;padding-inline:12px}}
{q} .sop-field-shell{{min-height:84px;padding-left:25px;margin-block:12px}}
{qfx} i:first-child{{inset:0;background:#b89b79;border-radius:3px 5px 10px 4px;border-bottom:3px solid #806954}}
{qfx} i:nth-child(2){{inset:6px 6px 8px;background:#68483f;border-radius:3px 9px 17px 5px;box-shadow:inset 0 2px 3px #30272244}}
{qfx} i:nth-child(3){{left:13px;right:28px;top:7px;height:2px;background:#a97960;border-radius:50%;opacity:.7}}
{qfx} i:nth-child(4){{right:10px;bottom:7px;width:25px;height:9px;background:#8f6151;border-radius:60% 40% 60% 10%;box-shadow:inset 0 1px #b4886b}}
{q} .sop-field-shell:focus-within .sop-field-fx i:nth-child(4){{transform:scaleX(.86);transform-origin:right}}
'''
 elif n==124:
  art=f'''{q}{{--field-bg:#f5f0e3;--field-ink:#344650;--field-muted:#556870;--field-accent:#608ea3;--field-edge:#8fa6ad;padding-inline:10px}}
{q} .sop-field-shell{{min-height:104px;padding:20px 50px 32px 25px}}
{qfx} i:first-child{{inset:0;background:#9bafb4;clip-path:polygon(0 0,100% 0,calc(100% - 10px) 100%,10px 100%);border-bottom:5px solid #4f6d7c}}
{qfx} i:nth-child(2){{inset:7px 10px 26px;background:#f5f0e3;box-shadow:0 3px #6a8490;transform-origin:bottom}}
{qfx} i:nth-child(3){{left:11px;right:11px;bottom:10px;height:10px;background:#c6d1d0;border-bottom:2px solid #789199;clip-path:polygon(0 0,100% 0,calc(100% - 5px) 100%,5px 100%)}}
{qfx} i:nth-child(4){{left:calc(50% - 18px);bottom:10px;width:36px;height:10px;background:#547384;border-top:2px solid #b9ced2;border-radius:2px}}
{q} .sop-field-shell:focus-within .sop-field-fx i:nth-child(3){{transform:translateY(2px)}}
'''
 else:
  art=f'''{q}{{--field-bg:#f5f4ed;--field-ink:#384851;--field-muted:#526772;--field-accent:#6d94a7;--field-edge:#afc0c5}}
{q} .sop-field-shell{{min-height:83px;padding-left:22px;padding-right:58px}}
{q} .sop-field-clear,{q} .sop-field-reveal{{right:19px}}
{qfx} i:first-child{{inset:0;background:#f5f4ed;border-radius:4px 28px 28px 4px;border-left:1px solid #bdced1;border-bottom:3px solid #c8d6d8}}
{qfx} i:nth-child(2){{top:0;bottom:0;right:0;width:17px;border-radius:0 28px 28px 0;background:#b3c5cb;border-left:1px solid #91aab5;box-shadow:inset -3px 0 #e1e8e5}}
{qfx} i:nth-child(3){{top:7px;bottom:10px;right:14px;width:3px;background:#e7eeeb;border-radius:50%;transform-origin:center}}
{qfx} i:nth-child(4){{left:12px;right:27px;top:3px;height:1px;background:white}}
{q} .sop-field-shell:focus-within .sop-field-fx i:nth-child(3){{transform:scaleY(.8)}}
'''
 protection=f'''{q}[data-invalid=true] .sop-field-shell{{border:1px dashed var(--field-error);outline-color:var(--field-error)}}
@media(forced-colors:active){{{q}{{--field-bg:Canvas;--field-ink:CanvasText;--field-muted:CanvasText;--field-accent:Highlight;--field-edge:ButtonText}}{qfx}{{display:none!important}}{q} .sop-field-shell{{background:Canvas;border:1px solid ButtonText;box-shadow:none}}{q} .sop-field-control{{color:CanvasText}}}}
'''
 p.write_text(common+reset+art+protection)
q='.sop-link.sop-index-spine-link.sop-index-spine-link'
add(138,f'''/* Matte bookcloth and a single light edge replace the heavy gold bevels. */
{q}{{--sop-link-ink:#f3eee3;--sop-link-accent:#9fbdce;min-height:91px;padding:23px 29px 30px}}
{q} .sop-link-art i:nth-child(2){{background:linear-gradient(0deg,#394f5d,#516b79 58%,#597381);border-radius:17px;border-block:1px solid #6d8793;box-shadow:inset 0 1px #a3b7bd55}}
{q} .sop-link-art i:nth-child(2)::before,{q} .sop-link-art i:nth-child(2)::after{{width:8px;background:#334b5a;border:1px solid #718b96;box-shadow:none}}
{q} .sop-link-art i:nth-child(3),{q} .sop-link-art i:nth-child(4){{width:4px;background:#354e5e;border:0;border-left:1px solid #91a8b1;border-radius:1px}}
{q} .sop-link-art i:nth-child(3){{left:17px}}{q} .sop-link-art i:nth-child(4){{right:17px}}
{q} .sop-link-art i:first-child{{left:17px;right:17px;height:13px;border-bottom:2px solid #314858}}
''')
