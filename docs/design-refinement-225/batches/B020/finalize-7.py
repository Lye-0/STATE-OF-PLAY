from pathlib import Path
import json,hashlib
p=Path(__file__).parent;m=json.load(open(p/'review-input-7.json')); bad=[f for f,h in m['sourceHashes'].items() if hashlib.sha256(Path(f).read_bytes()).hexdigest()!=h];assert not bad
(p/'hash-verification-final-7.json').write_text(json.dumps({'authorHashesMatched':100,'sharedHashesMatched':1,'mismatches':bad},indent=2)+'\n')
primary=json.load(open(p/'measurements-7.json'));native=json.load(open(p/'measurements-commands-7.json'))+json.load(open(p/'measurements-context-7.json'));react=json.load(open(p/'measurements-react-7.json'));menus=json.load(open(p/'measurements-focus-menu-7.json'))
assert len(primary)==20 and len(native)==20 and len(react)==44
assert not any(r.get('error')or r.get('errors')or any(not c['pass']for c in r.get('checks',[]))for r in native+react)
for r in menus:
 for state in r['states'].values():
  for key in ['end','home']:
   a=state[key];assert a['focus']['y']>=a['panel']['y']-1 and a['focus']['bottom']<=a['panel']['bottom']+1
notes={620:'独立した蔵書票の候補を二列から一列へ組み替え、記号・名称・説明・キーが紙面の組版を構成する。Bの単列検索との差が構造に現れ、狭幅でも成立。',621:'連番・本文・傍注/shortcutの欄が独立し、狭幅では読み順を保って縦へ移る。全連番が見え、hover文字の旧2px移動はgallery/portableとも0pxへ解消。',628:'用途別操作カードと広い検索面が実用的。長題名・分類も折返し、操作/配布検査を通過。',629:'高密度の連続一覧と側線で現在位置を示す用途差が明確。長題名・分類と狭幅の操作を維持。',630:'章別の候補構成を維持。旧長分類63px切れは解消し、LTR/RTL・forcedで折返す。',634:'二段の紙面と下敷きの構造を維持。End/Homeの焦点露出が復旧し、有効文字の実面最小6.245:1。',635:'綴じ代・全行連番・名称/説明/キーの記録欄が台帳の構造を作る。焦点露出と補助文字を改善、実面最小5.176:1。',638:'布背と別紙の分類束を重ね、綴じる相手面が明確。対象名の旧40px列はportable172px/gallery199pxへ解消。焦点と長文を維持。',639:'分類ごとの独立紙を角受けが前側から保持し、開いた隙間と重なりが成立。焦点露出と文字を改善、実面最小5.313:1。',641:'前側ポケットと背後の紙端、切欠きの前後関係を維持。共有修正により短いviewportでも末尾/先頭焦点が露出する。'}
parts=[]
for r in primary[:10]:
 parts.append(dict(id=r['id'],number=r['number'],verdict='pass',note=notes[r['number']],findings=[],evidence=[f'evidence-7/sheet-{r["id"]}.jpg','measurements-7.json','measurements-commands-7.json'if r['category']=='commands'else'measurements-context-7.json','measurements-react-7.json'],reviewed={'round':7,'actualGallery':True,'portable':True,'hoverEntryExitReentry':True,'narrow320LongRTL':True,'forcedReduced':True,'native':True,'react4Formats':True,'ABVisualComparison':True}))
coverage=dict(primaryRows=20,nativeChecks=350,reactPartsFormats=40,reactChecks=140,runtimeErrors=0,authorHashesMatched=100,sharedHashesMatched=1,lowHeightCommandConditions=40,shortLabelContextFocusConditions=40,targetLayoutConditions=40,imagesViewed=['10 primary sheets /120 states','2 React sheets /20 opened/forced images','errors-sheet /10 narrow error images','targets-sheet /5 portable long targets','focus-end-sheet /10 normal/forced low-height End images','5 command portable normal long manual-bottom images','R620/R621/R635/R638/R639 normal close images'],pendingRequiredMeasurements=[],limitations=['Chromiumの指定状態/targetの検査であり無欠陥保証ではない。','Aの構造評価は機能試験と区別したレビュー判断。','長い候補全体が一画面に収まらない場合は追加40条件で手動末尾到達を確認。','disabled候補の淡い文字は有効文字のコントラスト判定から分離。','React長文の全組合せは未実行。同作者CSSのgallery/portableで長文を検査。','共有contextのRTL/scale/外側scroll保持は同一hashのcontext-focus-review.jsonの独立補足80条件800checksとReact20条件120checksも参照。'])
(p/'review-7.json').write_text(json.dumps(dict(batch='B020',round=7,overall='pass',parts=parts,coverage=coverage),ensure_ascii=False,indent=2)+'\n')
lines=['# B020 round 7 独立再検査','','10 pass / 0 changes_required。作者100ファイルと共有1ファイルのhashは凍結入力と一致。検査担当による作者変更なし。','','| ID | 判定・根拠 |','|---|---|']+[f'| R{x["number"]} | pass: {x["note"]} |'for x in parts]
lines+=['','Aの再構成5件をBと比較して実画像で確認。紙面・欄・支持面の構造に差があり、色や罫だけの変更とは判断しない。旧hover文字移動、長分類切れ、狭幅対象名、共有キーボード焦点、有効補助文字の問題は指定条件で解消。','','gallery/portable native350 checks、React4形式×10件140 checks成功。短い8項目のcontext40条件でEnd/Home焦点の露出、command低height40条件で手動末尾到達を確認。120状態の主画像、20枚のReact画像、エラー/対象名/末尾焦点の画像を視認。必須計測の未完なし。','','共有contextは独立補足で承認したhash 8d6d877989bad42c77092258e4676c71dd1a7bcfb02053b11d5f0cfa3b19cda7と一致。範囲・限界は[review-7.json](review-7.json)。']
(p/'review-7.md').write_text('\n'.join(lines)+'\n');print('B020 r7 saved 10 pass')
