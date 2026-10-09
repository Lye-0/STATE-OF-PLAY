from pathlib import Path
import json,hashlib
p=Path(__file__).parent
old=json.load(open(p/'review-4.json'));manifest=json.load(open(p/'review-input-5.json'))
assert all(hashlib.sha256(Path(f).read_bytes()).hexdigest()==h for f,h in manifest['sourceHashes'].items())
notes={528:'不正HEXの説明を14pxの濃い赤へ修正。長い見出しでも現在色は通常60px/forced29pxを維持。テーマ候補の名称とコードを読むBの構成を保持。',530:'エラーの可読性を改善し、現在色見本は長文・RTL・forcedでも29pxを維持。SV面とRGB編集の制作向け構成を保持。',539:'外周箱を解き、図版・注記・本文の間に実背景へ抜ける間隔を設けた。開放端の交差罫と図版のずれた縁が構造を支え、Bの一枚カードとの差が成立。',541:'横断見出しの下で図版/縦分類と実件数の独立レコード札を並置。読み込み行と番号が対応し、B548の見出し付き本文カードとは読み順と構成要素が分離した。',548:'長い見出し・著者名が狭幅で折り返し、RTL/forcedでも表示内に収まる。小図版と見出しを先に読む簡潔なBの構成を保持。',550:'長い見出し・著者名の切れを解消。著者先行→大図版→本文というB548との用途差を保持。',557:'時刻と番号を専用レーンへ分離し、展開本文を連続する紙面へ置いた。選択位置がレーン側へ対応し、B569の一般的な工程列とはログの読み方と構造が分離。長文は狭幅で折り返す。'}
for part in old['parts']:
 n=part['number'];part['verdict']='pass';part['findings']=[]
 if n in notes:
  part['note']=notes[n];part['reviewed']={**part['reviewed'],'round':5,'independentReinspection':True};part['evidence']=[f'evidence-5/sheet-{part["id"]}.jpg','measurements-5.json','measurements-react-5.json','contrast-summary-5.json','measurements-colors-5.json' if n in [528,530] else 'measurements-native-5.json']
 else:part['reviewed']={**part['reviewed'],'inheritedFromRound':4,'author10FilesUnchanged':True,'shared43FilesUnchanged':True};part['evidence'].append('hash-verification-5.json')
sets={name:json.load(open(p/(name+'.json')))for name in ['measurements-5','measurements-native-5','measurements-colors-5','measurements-react-5']}
assert [len(x)for x in sets.values()]==[14,10,4,32]
assert not any(r.get('error') or any(not c['pass']for c in r.get('checks',[]))for rows in sets.values()for r in rows)
old.update(round=5,overall='pass',coverage={'reinspectedParts':7,'inheritedUnchangedParts':3,'primaryRows':14,'nativeChecks':46,'colorStateRows':4,'reactPartsFormats':28,'reactChecks':56,'sourceHashesMatched':100,'sharedInternalHashesMatched':43,'runtimeErrors':0,'imagesViewed':'7 sheets: portable/gallery rest,loaded,long,RTL,forced and React loaded/selected/forced; two gallery narrow error images; three main operated images','pendingRequiredMeasurements':[],'limitations':['Chromiumの指定状態に対する検査であり無欠陥保証ではない。','未変更R523/R536/R556は作者30ファイルと共有43ファイル一致でround4の実検査を継承。','Reactの長文全組合せは未実行。同一作者CSSのgallery/portableで長文を実査。']})
(p/'review-5.json').write_text(json.dumps(old,ensure_ascii=False,indent=2)+'\n')
lines=['# B017 round 5 独立再検査','','10 pass / 0 changes_required。変更7件を再検査、未変更3件は作者/共有ハッシュ照合でround4の証拠を継承。作者ファイルは変更していない。','','A3件は色や罫の変更だけでなく、背景へ抜ける図版組版、分類列と独立レコード札、時刻レーンと本文紙面という構造差を確認した。Bの長文切れ・エラー可読性・見本縮小は解消。','','| ID | 判定根拠 |','|---|---|']
lines += [f'| R{x["number"]} | {x["note"]} |'for x in old['parts']]
lines+=['','実gallery/portableのhover往復・320px・長文・RTL・forced/reducedを確認。native 46 checks、React 4形式×7件 56 checks は成功。色入力はHEX/不正値/Escape/native/keyboard/controlled/reset/readonly/disabledの状態を確認。現在色見本はR528通常60px/forced29px、R530は29pxを保持。通常表示の測定最小文字比率は変更7件とも4.837以上。','','作者100 hash、共有internal43 hashを確認。必須計測の未完はない。React長文全組合せは未実行。詳細は[review-5.json](review-5.json)。']
(p/'review-5.md').write_text('\n'.join(lines)+'\n')
print('B017 round5: 10 pass saved')
