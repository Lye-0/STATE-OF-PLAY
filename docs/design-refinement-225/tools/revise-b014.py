from pathlib import Path
import json
W=Path('docs/design-refinement-225')
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';r=('.sop-sig' if cat=='avatars' else '.sop-foundation')+'.sop-'+id+'.sop-'+id;p.write_text(p.read_text()+'\n'+css.replace('$',r)+'\n')
add('numbers','recessed-dial-number','@media(forced-colors:none){$ .ff-stepper>button:hover:not(:disabled){background:#984d31;color:#fff}}')
add('numbers','rail-stop-number','@media(forced-colors:none){${--muted:#4f6878}}')
add('numbers','soft-amount-number','''$ .ff-stepper{display:grid;grid-template-columns:44px minmax(0,1fr) 44px;grid-template-rows:minmax(48px,auto) auto;padding-bottom:10px;gap:0}
$ .ff-number-face{display:contents}
$ [data-number]{grid-column:2;grid-row:1;width:calc(100% - 8px);max-width:100%;min-width:0;justify-self:center}
$ .ff-stepper>button{height:48px;min-height:44px;grid-row:1}
$ .ff-stepper>button[data-adjust="-1"]{grid-column:1}$ .ff-stepper>button[data-adjust="1"]{grid-column:3}
$ .ff-unit{grid-column:1/-1;grid-row:2;min-width:0;max-width:100%;width:auto;margin:0;padding:0 12px;text-align:center;white-space:normal;overflow-wrap:anywhere;line-height:1.6}''')
add('numbers','warm-unit-number','''$ .ff-number-face{flex-wrap:wrap;row-gap:6px}
$ [data-number]{flex:0 1 5ch;width:5ch;min-width:3ch;max-width:100%;text-align:center}
$ .ff-unit{flex:0 1 auto;width:auto;min-width:0;max-width:100%;white-space:normal;overflow-wrap:anywhere;margin:0;text-align:center}''')
add('avatars','outline-person-profile','''@media(forced-colors:active){
$ .sg-person[data-selected=true]{--sg-ink:HighlightText;--sg-muted:HighlightText;background:Highlight;color:HighlightText;forced-color-adjust:none}
$ .sg-person[data-selected=true] .sg-person-copy,$ .sg-person[data-selected=true] .sg-person-name,$ .sg-person[data-selected=true] .sg-person-sub{background:transparent;color:HighlightText;forced-color-adjust:none}
$ .sg-person[data-selected=true] .sg-portrait-picture{background:Canvas;border-color:HighlightText}
$ .sg-person[data-selected=true] .sg-initials{color:CanvasText;background:Canvas;text-shadow:none;forced-color-adjust:none}
}''')
p=Path('src/parts/numbers/soft-amount-number/meta.json');d=json.loads(p.read_text());old=d['description'];short=d['tagline'];new='数量と左右の増減操作を短い一列にまとめ、単位を下段の全幅で読む数量入力。長い単位でも数字を押し潰さず、直接入力とキー操作を保つ。';d.update(description=new,tagline=new.split('。')[0]+'。');p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
for p in [p.parent/'usage.md',p.parent/'prompt.md',p.parent/'styles.css',*list((p.parent/'react').glob('*.tsx'))]:
 s=p.read_text().replace(old,new)
 if old!=short:s=s.replace(short,d['tagline'])
 p.write_text(s)
p=W/'batches/B014/design.md';p.write_text(p.read_text()+'\n## 独立検査round4への対応\nR461 hover面を濃い銅色にして22px記号を読めるようにする。R462単位・範囲の補助色を濃くする。R468は上段に数値と左右キー、下段に全幅単位を設け、長単位と数値を競合させない。R470は基線の短単位を保ち、長単位を全幅の次行へ折り返す。R489はforced選択面/名前/役割の色をHighlightとHighlightTextへ揃え、肖像内イニシャルはCanvas/CanvasTextへ分離。\n')
