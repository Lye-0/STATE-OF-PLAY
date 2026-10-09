from author import add,describe

def r(id,orn=False):return ('.sop-ornament' if orn else '.sop-foundation')+'.sop-'+id+'.sop-'+id
id='offset-portals-ornament';s=r(id,True);add('ornaments',id,f'''
{s} .x-composition{{perspective:600px;transform-style:preserve-3d;transform:rotateX(-12deg) rotateY(-22deg);width:180px;height:180px}}
{s} .x-composition i{{inset:auto;left:calc(18px + var(--i)*20px);top:calc(24px + var(--i)*4px);width:64px;height:116px;border:2px solid #d6cbb0;border-inline-end:7px solid #85785d;border-radius:32px 32px 0 0;border-bottom:0;background:none;transform-origin:50% 100%;translate:none;animation:sop-refine-portals 7s ease-in-out infinite;animation-delay:calc(var(--i)*-.25s)}}
{s} .x-composition i:nth-child(even){{border-block-color:#d6cbb0}}
{s} .x-composition i::after{{content:'';position:absolute;left:-8px;right:-10px;bottom:-5px;height:5px;background:#9d8f70;transform:skewX(-25deg);transform-origin:left top}}
@keyframes sop-refine-portals{{0%,100%{{transform:rotateY(-12deg)}}50%{{transform:rotateY(12deg)}}}}
''')
id='segment-orbit-loader';s=r(id);add('loaders',id,f'''
{s} .x-composition{{width:180px;height:180px;transform:none}}
{s} .x-composition::before{{content:'';position:absolute;inset:51px;border:1px solid #8fa8a8;border-radius:50%;background:radial-gradient(circle,transparent 0 31px,#203034 32px 100%)}}
{s} .x-composition::after{{content:'';position:absolute;inset:82px;border:2px solid #d1dfd7;border-radius:50%}}
{s} .x-composition i{{inset:auto;left:76px;top:20px;width:28px;height:40px;border:1px solid #d0ddd5;border-inline-end:5px solid #6b908d;border-radius:18px 18px 2px 2px;background:#a3bfb5;clip-path:none;transform-origin:14px 70px;transform:rotate(calc(var(--i)*60deg));translate:none;rotate:none;animation:sop-refine-orbit-leaves 4s cubic-bezier(.5,0,.5,1) infinite;animation-delay:0}}
{s} .x-composition i::before{{content:'';position:absolute;inset:6px 7px 7px;border-inline-start:1px solid #e8efe5}}
@keyframes sop-refine-orbit-leaves{{0%,100%{{transform:rotate(calc(var(--i)*60deg)) translateY(0)}}35%{{transform:rotate(calc(var(--i)*60deg + 30deg)) translateY(12px)}}70%{{transform:rotate(calc(var(--i)*60deg + 60deg)) translateY(0)}}}}
''')
id='counterflow-lines-loader';s=r(id);add('loaders',id,f'''
{s} .x-composition{{width:180px;height:180px;transform:none}}
{s} .x-composition::before{{content:'';position:absolute;inset:51px 12px;border-block:1px solid #697a91;background:linear-gradient(transparent 37px,#697a91 37px 38px,transparent 38px)}}
{s} .x-composition::after{{content:'';position:absolute;inset:46px 6px;border-inline:2px solid #abbfd5}}
{s} .x-composition i{{inset:auto;left:18px;top:63px;width:26px;height:14px;border:1px solid #b9cbe0;border-radius:2px;background:#7598b9;transform:none;translate:none;rotate:none;animation:sop-refine-counterflow 2.7s linear infinite;animation-delay:calc(var(--i)*-.9s)}}
{s} .x-composition i:nth-child(n+4){{top:103px;background:#ccb58d;border-color:#eadbc3;animation-direction:reverse;animation-delay:calc((var(--i) - 3)*-.9s)}}
{s} .x-composition i::before,{s} .x-composition i::after{{display:none}}
@keyframes sop-refine-counterflow{{0%{{translate:0 0;opacity:0}}12%{{opacity:1}}88%{{opacity:1}}100%{{translate:118px 0;opacity:0}}}}
@media(prefers-reduced-motion:reduce){{{s} .x-composition i{{left:calc(20px + mod(var(--i),3)*50px);opacity:1}}}}
''')
id='hinged-cells-ornament';s=r(id,True);add('ornaments',id,f'''
{s} .x-composition{{perspective:600px;transform:none;transform-style:preserve-3d;width:180px;height:180px}}
{s} .x-composition::before{{content:'';position:absolute;inset:14px 23px;border-inline:2px solid #8198a5;background:repeating-linear-gradient(to bottom,transparent 0 42px,#8198a5 42px 44px,transparent 44px 52px)}}
{s} .x-composition i{{left:26px;top:calc(18px + round(down,var(--i)/2)*50px);width:64px;height:40px;transform-origin:0 50%;background:#adc3c9;border:1px solid #d4e0de;border-inline-end:3px solid #7d9ca8;transform:rotateY(-24deg);translate:none;animation:sop-refine-cell-left 6s ease-in-out infinite;animation-delay:calc(round(down,var(--i)/2)*-.6s)}}
{s} .x-composition i:nth-child(even){{left:90px;background:#c8d5cf;transform-origin:100% 50%;border-inline-start:3px solid #92a8a8;border-inline-end:1px solid #d4e0de;transform:rotateY(24deg);animation-name:sop-refine-cell-right}}
{s} .x-composition i::before{{content:'';position:absolute;top:15px;left:auto;right:5px;width:3px;height:10px;background:#56747c;border:0}}
{s} .x-composition i:nth-child(even)::before{{left:5px;right:auto}}
@keyframes sop-refine-cell-left{{0%,100%{{transform:rotateY(-12deg)}}50%{{transform:rotateY(-64deg)}}}}
@keyframes sop-refine-cell-right{{0%,100%{{transform:rotateY(12deg)}}50%{{transform:rotateY(64deg)}}}}
''')
id='slim-dash-loader-loader';s=r(id);add('loaders',id,f'''
{s} .ct-loader-stage{{min-height:132px}}
{s} .ct-loader-body{{height:64px!important}}
{s} .x-composition{{width:180px;height:64px;transform:none}}
{s} .x-composition::before{{content:'';position:absolute;inset:23px 7px;border:1px solid #737e8a;border-radius:3px}}
{s} .x-composition i{{inset:auto;left:calc(12px + var(--i)*26px);top:28px;width:22px;height:8px;border:0;border-radius:1px;background:#b6c7d4;transform:none;translate:none;rotate:none;opacity:.35;animation:sop-refine-slim-queue 1.8s ease-in-out infinite;animation-delay:calc(var(--i)*.15s)}}
@keyframes sop-refine-slim-queue{{0%,60%,100%{{opacity:.35}}25%{{opacity:1}}}}
@media(prefers-reduced-motion:reduce){{{s} .x-composition i{{opacity:.8}}}}
''')
describe('B023',{
'offset-portals-ornament':('ornaments','六つのアーチを奥行き方向へ立てた回廊。床の短い足元と厚い側面が門を支え、左右への小さな揺れで隣の開口が見え隠れする。'),
'segment-orbit-loader':('loaders','固定した中心を囲む六枚の羽根が収縮して一段送られるローダー。短い線の回転ではなく、厚い羽根と中心の空隙が協調して変化する。'),
'counterflow-lines-loader':('loaders','仕切りのある二本の流路を小片が逆向きに進むローダー。上下の通路と両端の境界を分け、互いの小片が重ならず流れる。'),
'hinged-cells-ornament':('ornaments','三段の小さな両開き扉が順に開閉する装飾。外側の蝶番を固定し、左右一対の戸と中央の把手が同じ開き角で対応する。'),
'slim-dash-loader-loader':('loaders','短い待機列に明るさが順に渡るコンパクトなローダー。外周の細い枠が六つの片をまとめ、読込状態の文言を固定して伝える。')},'B023 動作の構造を分ける')
