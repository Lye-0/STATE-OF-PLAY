"""Build one offline, image-embedded report. Decode only the visible page."""
from pathlib import Path
from PIL import Image
import base64,io,json,html,sys
w=Path(__file__).resolve().parents[1];root=w.parents[1];audit=root/'docs/audit-730-hover-2026-10-09'
targets=json.loads((w/'targets.json').read_text());before={p['id']:p for p in json.loads((audit/'results.json').read_text())['rows']};out=[]
def embedded(path):
 assert path.is_file(),path
 im=Image.open(path).convert('RGB');im.thumbnail((1000,1600));b=io.BytesIO();im.save(b,format='WEBP',quality=83,method=5)
 return 'data:image/webp;base64,'+base64.b64encode(b.getvalue()).decode()
for p in targets:
 if p['state']!='pushed':continue
 d=w/'batches'/p['batch'];review=json.loads((d/f"review-{p['reviewRound']}.json").read_text());part=next(a for a in review['parts'] if a['id']==p['id']);assert part['verdict']=='pass'
 pics=[]
 oldImages=before[p['id']]['images'];labels={x['label'] for x in oldImages}
 opened=p['category'] in ['popups','hints','datepickers','commands','contextmenus']
 first='展開状態' if opened and '展開状態' in labels else '実際の通知' if p['category']=='toasts' and '実際の通知' in labels else '通常表示'
 narrow='320px・展開状態' if opened and '320px・展開状態' in labels else '320px・操作後'
 for key,label in [(first,'修正前・'+('展開' if first=='展開状態' else '通知' if first=='実際の通知' else '通常')),(narrow,'修正前・320px')]:
  candidates=[x for x in before[p['id']]['images'] if x['label']==key]
  if candidates:pics.append({'label':label,'src':embedded(audit/candidates[0]['source'])})
 for state,label in [('normal','修正後・通常'),('hover','修正後・ホバー'),('narrow','修正後・320px')]:
  pics.append({'label':label,'src':embedded(d/f"captures/main/{p['id']}-{state}.png")})
 error=d/f"captures/main/{p['id']}-error.png"
 if error.exists():pics.append({'label':'修正後・エラーと再試行','src':embedded(error)})
 operated=d/f"captures/main/{p['id']}-operated.png"
 if operated.exists():pics.append({'label':'修正後・操作結果','src':embedded(operated)})
 launcher=d/f"captures/main/{p['id']}-launcher.png"
 if launcher.exists():pics.append({'label':'修正後・起動前の展示','src':embedded(launcher)})
 extra=d/f"captures/main/{p['id']}-expanded.png"
 if extra.exists():pics.append({'label':'修正後・展開とホバー','src':embedded(extra)})
 extraNarrow=d/f"captures/main/{p['id']}-expanded-narrow.png"
 if extraNarrow.exists():pics.append({'label':'修正後・320pxの展開','src':embedded(extraNarrow)})
 out.append({**{k:p[k] for k in ['number','id','name','designType','categoryName','batch','commit']},'before':p['note'],'after':part['note'],'images':pics})
if '--partial' not in sys.argv:assert len(out)==225,len(out)
payload=json.dumps(out,ensure_ascii=False,separators=(',',':')).replace('<','\\u003c')
page='''<!doctype html><html lang="ja"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>225件の改善結果 — STATE OF PLAY</title><style>
*{box-sizing:border-box}body{margin:0;background:#f3f3ef;color:#26323b;font:16px/1.75 system-ui,sans-serif}header,main,nav{max-width:1260px;margin:auto;padding:20px}h1{font-size:clamp(22px,4vw,36px)}header p{max-width:80ch}label{display:inline-flex;gap:10px;align-items:center;flex-wrap:wrap}input,select,button{font:inherit;padding:9px 14px;border:1px solid #8d999f;border-radius:5px;background:white;color:inherit}button:disabled{opacity:.4}nav{display:flex;gap:18px;align-items:center;flex-wrap:wrap}article{background:white;border:1px solid #ced4d6;padding:20px;margin:0 0 26px}h2{font-size:24px;margin:0}.meta{font-size:14px;color:#536370}.photos{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:14px;margin-top:16px}figure{margin:0;min-width:0}img{display:block;width:100%;height:290px;object-fit:contain;background:#13181d}figcaption{font-size:14px;margin:6px 0}summary{cursor:pointer}code{overflow-wrap:anywhere}a{color:#28597e}button:focus-visible,input:focus-visible{outline:3px solid #3d6c95}
dialog{border:0;padding:16px;max-width:96vw;max-height:96vh}dialog::backdrop{background:#000b}dialog img{width:auto;height:auto;max-width:90vw;max-height:none}dialog button{display:block;margin-bottom:10px;position:sticky;top:0;z-index:1}</style><dialog id="zoom"><button id="closeZoom">閉じる</button><img alt=""></dialog><header><h1>225件の改善結果</h1><p id="summary"></p><p>番号は前回の検査と共通です。修正前・修正後を比較でき、画像はすべてこのHTMLに埋め込んでいます。10件ずつ表示するため、一度に全画像を読み込む必要はありません。Aは造形の独自性と分かりやすさ、Bは実用性と見た目を検査し、ホバー往復・狭幅・操作後も確認しました。</p><label>絞り込み <input id="query" placeholder="番号・名前・カテゴリ" type="search"></label></header><nav><button id="prev">前の10件</button><span id="count" aria-live="polite"></span><button id="next">次の10件</button></nav><main id="list"></main><script id="data" type="application/json">PAYLOAD</script><script>
const zoom=document.getElementById('zoom');document.getElementById('closeZoom').onclick=()=>zoom.close();document.addEventListener('click',e=>{const a=e.target.closest('.photos a');if(a){e.preventDefault();zoom.querySelector('img').src=a.href;zoom.querySelector('img').alt=a.querySelector('img').alt;zoom.showModal()}});
const rows=JSON.parse(document.getElementById('data').textContent);let page=0,found=rows;const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
document.getElementById('summary').textContent=`独立検査を通過してプッシュ済み：${rows.length} / 225件。`;
function render(){document.getElementById('list').innerHTML=found.slice(page*10,page*10+10).map(r=>`<article><h2>R${String(r.number).padStart(3,'0')} ${esc(r.name)}</h2><p class="meta">${esc(r.categoryName)} · ${r.designType} · ${r.batch}</p><p><strong>前回の指摘：</strong>${esc(r.before)}</p><p><strong>修正後の独立検査：</strong>${esc(r.after)}</p><div class="photos">${r.images.map(i=>`<figure><a href="${i.src}" target="_blank"><img src="${i.src}" alt="${esc(r.name+' '+i.label)}" decoding="async" loading="lazy"></a><figcaption>${esc(i.label)}</figcaption></figure>`).join('')}</div><details><summary>識別情報・コミット</summary><code>${esc(r.id)}<br>${r.commit}</code></details></article>`).join('');document.getElementById('count').textContent=found.length?`${page*10+1}–${Math.min(found.length,page*10+10)} / ${found.length}件`:'該当なし';document.getElementById('prev').disabled=page===0;document.getElementById('next').disabled=(page+1)*10>=found.length;}
document.getElementById('query').addEventListener('input',e=>{const q=e.target.value.trim().toLowerCase();found=rows.filter(r=>`${r.number} r${String(r.number).padStart(3,'0')} ${r.name} ${r.id} ${r.categoryName}`.toLowerCase().includes(q));page=0;render()});for(const [id,d]of[['prev',-1],['next',1]])document.getElementById(id).onclick=()=>{page+=d;render();window.scrollTo(0,0)};render();
</script></html>'''.replace('PAYLOAD',payload)
(w/'refinement-results.html').write_text(page)
print('REPORT',len(out),len(page.encode()),'bytes')
