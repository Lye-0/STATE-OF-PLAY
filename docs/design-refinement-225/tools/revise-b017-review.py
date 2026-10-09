"""Apply the independent B017 review; one-shot author changes."""
import json
from pathlib import Path
w=Path('docs/design-refinement-225')
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n/* B017 independent review follow-up */\n'+css+'\n')
def s(id):return '.sop-sig.sop-'+id+'.sop-'+id
for id,col in [('soft-theme-color','#883b50'),('warm-studio-color','#873f2c')]:
 a=s(id);add('colors',id,f'''{a} [data-sg-error]{{font-size:14px;line-height:1.65;overflow-wrap:anywhere;color:{col}}}
{a} .sg-color-heading .sg-label{{min-width:0;flex:1;overflow-wrap:anywhere}}
{a} .sg-color-swatch{{flex-shrink:0;min-width:29px}}
@media(forced-colors:active){{{a} [data-sg-error]{{color:CanvasText}}}}''')
for id in ['soft-preview-skeleton','warm-card-skeleton']:
 a=s(id);add('skeletons',id,f'''{a} .sg-sk-profile>div{{min-width:0;max-width:100%}}
{a} .sg-sk-profile :is(strong,small){{display:block;min-width:0;max-width:100%;white-space:normal;overflow-wrap:anywhere;word-break:normal}}
{a} .sg-sk-lines p,{a} .sg-sk-tiles>span{{overflow-wrap:anywhere}}''')
id='open-grid-skeleton';a=s(id)
add('skeletons',id,f'''@media(forced-colors:none){{
{a}{{background:transparent}}
{a} .sg-skeleton-frame{{background:transparent;padding:12px;gap:26px 22px;border:0;box-shadow:none;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);grid-template-areas:'hero profile' 'hero lines' '. tiles'}}
{a} .sg-skeleton-frame::before{{display:none}}
{a} .sg-sk-hero{{background:#d3e1e6;min-height:230px;height:100%;border:0;border-inline-start:4px solid #9ab1be;box-shadow:6px 6px 0 #91a9b4;align-self:stretch}}
{a} .sg-sk-profile{{position:relative;background:#eff4f6;padding:18px 14px;gap:14px;border:0}}
{a} .sg-sk-profile::before{{content:'';position:absolute;inset:-12px auto auto -12px;width:24px;height:24px;background:linear-gradient(#a4bbc6,#a4bbc6) center/1px 24px no-repeat,linear-gradient(#a4bbc6,#a4bbc6) center/24px 1px no-repeat;pointer-events:none}}
{a} .sg-sk-lines{{background:#eff4f6;padding:18px 14px;border:0;border-block-start:2px solid #a6beca;align-self:start}}
{a} .sg-sk-tiles{{padding:10px 0 0;border:0;border-top:1px solid #a6beca;color:#ecf2f5;gap:8px}}
{a} .sg-sk-tiles>i,{a} .sg-sk-tiles>span{{color:#374b58;background:#eff4f6;border-color:#a6beca;height:auto;min-height:32px}}
{a}:dir(rtl) .sg-sk-profile::before{{left:auto;right:-12px}}
@container(max-width:300px){{{a} .sg-skeleton-frame{{grid-template-columns:minmax(0,1fr);grid-template-areas:'hero' 'profile' 'lines' 'tiles';gap:24px;padding:12px}}{a} .sg-sk-hero{{height:140px;min-height:0;width:84%}}{a} .sg-sk-profile{{margin-inline-start:20px;flex-direction:row;align-items:center}}{a} .sg-sk-lines{{margin-inline-start:20px}}{a} .sg-sk-tiles{{margin-inline-start:20px}}}}
}}''')
id='list-column-skeleton';a=s(id)
add('skeletons',id,f'''@media(forced-colors:none){{
{a}{{background:transparent}}
{a} .sg-skeleton-frame{{background:transparent;border:0;box-shadow:none;padding:12px 0;grid-template-columns:68px minmax(0,1fr);grid-template-rows:auto auto 1fr;grid-template-areas:'profile profile' 'hero lines' 'tiles lines';gap:18px 14px;min-height:330px}}
{a} .sg-sk-profile{{background:#f5f0e4;padding:18px 16px;border-block:1px solid #b5a68d;flex-direction:row;align-items:center;justify-content:start;gap:12px}}
{a} .sg-sk-profile>span{{display:grid;width:32px;min-width:32px;height:32px;background:#ded3bd;color:#514b42}}
{a} .sg-sk-hero{{height:82px;min-height:0;border:6px solid #ede2cc;background:#ded3bd;box-shadow:0 2px 0 #aa9571}}
{a} .sg-sk-tiles{{display:grid;grid-template-columns:minmax(0,1fr);align-content:start;gap:10px;border:0;padding:0}}
{a} .sg-sk-tiles>i,{a} .sg-sk-tiles>span{{min-height:36px;height:auto;background:#e8ddc8;color:#514b42;border:0;border-inline-start:3px solid #aa9571}}
{a} .sg-sk-lines{{gap:13px;border:0;padding:0;align-content:start;min-width:0}}
{a} .sg-sk-lines>i,{a} .sg-sk-lines>p{{position:relative;margin:0;padding:30px 12px 14px;width:100%;min-height:68px;height:auto;line-height:1.7;background:#f5f0e4;border:0;border-inline-start:3px solid #bda985;box-shadow:0 2px 0 #c4b394}}
{a} .sg-sk-lines>i{{background:linear-gradient(#cfc5b2,#cfc5b2) 12px 37px/calc(100% - 24px) 10px no-repeat,#f5f0e4}}
{a} .sg-sk-lines>i::before,{a} .sg-sk-lines>p::before{{inset:7px auto auto 12px;line-height:1.4;color:#77674f}}
{a}:dir(rtl) .sg-sk-lines>i,{a}:dir(rtl) .sg-sk-lines>p{{padding:30px 12px 14px}}
{a}:dir(rtl) .sg-sk-lines>i::before,{a}:dir(rtl) .sg-sk-lines>p::before{{left:auto;right:12px}}
}}''')
id='console-log-timeline';a=s(id)
add('timelines',id,f'''@media(forced-colors:none){{
{a} .sg-timeline{{position:relative;padding:20px 16px 22px;background:#e4edf2;border:0;border-inline:1px solid #90a9b9}}
{a} .sg-timeline-head{{border:0;border-bottom:1px solid #90a9b9;padding:0 0 16px;margin-bottom:18px}}
{a} .sg-timeline-list{{display:grid;gap:14px}}
{a} .sg-event,{a}:dir(rtl) .sg-event{{display:grid;grid-template-columns:minmax(48px,.55fr) minmax(0,1.5fr);gap:0;padding:0;border:0;background:#f8fbfc;box-shadow:0 2px 0 #a6bcc9}}
{a} .sg-event::before{{top:9px;left:auto;right:auto;inset-inline-start:10px;z-index:1;color:#3f5c70;font-size:11px}}
{a} .sg-event-time{{grid-column:1;grid-row:1;padding:34px 8px 14px;background:#cfdee8;color:#304e63;border-inline-end:1px dashed #7897aa;overflow-wrap:anywhere;font:12px/1.7 Consolas,monospace;align-self:stretch}}
{a} .sg-event-main{{grid-column:2;grid-row:1;padding:12px 10px;background:#f8fbfc;min-width:0}}
{a} .sg-event summary{{min-height:66px;padding:0;gap:8px}}
{a} .sg-event-heading{{font:600 15px/1.65 Consolas,'Yu Gothic',monospace;overflow-wrap:anywhere}}
{a} .sg-event-status{{font-size:12px}}
{a} .sg-event[data-status=active]{{background:#f8fbfc}}
{a} .sg-event[data-status=active] .sg-event-time{{background:#b9d2e1;border-inline-start:3px solid #496f88;padding-inline-start:5px}}
{a} .sg-event-body,{a}:dir(rtl) .sg-event-body{{padding:12px 0 0;border:0;border-top:1px solid #c7d8e2}}
{a} .sg-event-body p{{font:14px/1.8 Arial,'Yu Gothic',sans-serif}}
{a}:dir(rtl) .sg-event::before{{left:auto;right:auto;inset-inline-start:10px}}
}}''')
updates={
'open-grid-skeleton':('skeletons','縦長の図版、独立した注記、本文を背景まで抜ける間隔で配置する待機表示。閉じたカード枠を使わず、格子の開いた端と交差点で情報の関係を示す。'),
'list-column-skeleton':('skeletons','左の図版・分類列と右の独立した記録札を並べる待機表示。横断する見出しの下で、実際の行数に合わせた札が縦へ続き、読み込み後も同じ構造で読む。'),
'console-log-timeline':('timelines','時刻専用の縦列と記録本文を分けたログのタイムライン。各記録は区切られた出力紙として続き、現在の行を時刻欄で示す。')}
for id,(cat,desc) in updates.items():
 d=Path('src/parts')/cat/id;m=d/'meta.json';data=json.loads(m.read_text());old=data['description'];data['description']=desc;m.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
 for p in [d/'prompt.md',d/'usage.md',*list((d/'react').glob('*.tsx'))]:
  p.write_text(p.read_text().replace(old,desc))
with (w/'batches/B017/design.md').open('a') as f:f.write('\n独立review差戻し：539は閉じた枠を廃止し、図版/注記/本文を背景まで抜ける間隔で分離。541は左分類・右記録札の列へ再設計。557は時刻専用列と本文紙を分けたログ構造へ。528/530のエラー文、530色見本、548/550長文折返しを補正。\n')
print('B017 reviewed follow-ups applied')
