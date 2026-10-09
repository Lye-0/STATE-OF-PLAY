from pathlib import Path
from author import add
import re
items={
'ceramic-stage-wizard':'''
.sg-wizard{padding:0;background:transparent;border:0;border-radius:0}
.sg-wizard-nav.sg-wizard-nav{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,48px),1fr));gap:12px;padding:3px 4px 0;border:0;background:none}
.sg-wizard-nav.sg-wizard-nav button{flex-direction:column;align-items:center;min-height:98px;padding:12px 4px 10px;gap:8px;background:linear-gradient(110deg,#f0f8fa,#d7e7ee);border:1px solid #b3cbd6;border-top:3px solid #fff;border-bottom:5px solid #9db9c8;border-radius:50% 50% 24px 24px / 28px 28px 16px 16px}
.sg-wizard-nav.sg-wizard-nav .sg-step-title{text-align:center;align-self:center;font-size:13px}
.sg-step-index{width:34px;height:34px;min-width:34px;background:#f5fbfd;border:1px solid #b7ceda;border-radius:50%;color:#435f70}
.sg-wizard-nav [aria-current=step]{border-bottom-color:#446d83;background:linear-gradient(110deg,#e6f1f6,#c1d7e3)}
.sg-wizard-panels{margin-top:18px;padding:26px 18px 18px;border:1px solid #a6c0cc;border-top:4px solid #fff;border-bottom:0;background:linear-gradient(110deg,#f2f9fb,#e1edf3);border-radius:32px 12px 0 0}
.sg-wizard-panel{min-height:190px;background:none}
.sg-wizard-footer{margin-top:0;padding:14px 18px 20px;background:#e1edf3;border:1px solid #a6c0cc;border-top:0;border-bottom:6px solid #a2bcc9;border-radius:0 0 28px 12px}
.sg-wizard-next{border-radius:22px;border:1px solid #41667b;border-top:2px solid #6d93a7;border-bottom:3px solid #244656;background:#34586b}
''',
'stitched-journey-wizard':'''
.sg-wizard{position:relative;padding-inline-start:22px;background:#e8dcea;border-bottom:6px solid #b99fc4;box-shadow:inset 8px 0 #bba2c5}
.sg-wizard::before{content:'';display:block;position:absolute;inset:10px auto 10px 11px;width:2px;height:auto;border:0;transform:none;background:repeating-linear-gradient(to bottom,#fff8ff 0 5px,transparent 5px 9px);pointer-events:none;z-index:3}
.sg-wizard-nav{padding:16px 14px 4px;background:none;gap:6px}
.sg-step-index::before{display:none}
.sg-wizard-nav button{border:1px dashed #ac8db8;padding:8px 10px;background:#f4eaf6;min-height:54px}
.sg-wizard-nav [aria-current=step]{background:#e0cfe8;border-color:#866795}
.sg-wizard-panels{margin-top:0;padding:16px 14px 12px;border:0;background:none}
.sg-wizard-panel{position:relative;padding:20px 14px;background:#fffaf4;border:1px solid #d4c4cb;border-inline-start:2px dashed #a88daf;border-bottom:3px solid #c5b0cd}
.sg-wizard-panel::before{content:'';position:absolute;inset:12px auto 12px -12px;width:15px;background:radial-gradient(ellipse 6px 2px at 50% 50%,transparent 60%,#8c6e99 70% 90%,transparent 100%) 0 0/15px 30px repeat-y;pointer-events:none}
.sg-wizard-footer{padding:4px 14px 18px;background:none;border-bottom:0}
:dir(rtl) .sg-wizard{box-shadow:inset -8px 0 #bba2c5}
:dir(rtl) .sg-wizard::before{left:auto;right:11px}
:dir(rtl) .sg-wizard-panel::before{left:auto;right:-12px}
'''
}
for id,css in items.items():
 r='.sop-sig.sop-'+id+'.sop-'+id
 css=re.sub(r'(^|})(\s*)([^{}]+){',lambda m:m[1]+m[2]+','.join((r+s if s.startswith(':dir') else r+' '+s) for s in m[3].split(','))+'{',css)
 add('wizards',id,css)
p=Path('docs/design-refinement-225/batches/B018/design.md');p.write_text(p.read_text()+'\n主担当のA/B横断比較でR578/R584の素材が罫・色へ寄りすぎると判断。R578は外側の縫い綴じと内側の紙面を実際に分け、糸が綴じ目をまたぐ構造へ。R584は工程を個別の陶の駒にし、入力する器と分けた。文字やクリック位置は遷移させず、進捗は既存の実状態のみで示す。\n')
