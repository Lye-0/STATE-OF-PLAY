import json,hashlib
from pathlib import Path
p=Path(__file__).parent;repo=Path.cwd();manifest=json.load(open(p/'review-input-4.json'))
hashes=[dict(path=k,expected=v,actual=hashlib.sha256((repo/k).read_bytes()).hexdigest()) for k,v in manifest['sourceHashes'].items()]
(p/'hash-check-4.json').write_text(json.dumps(hashes,indent=2));assert all(x['expected']==x['actual'] for x in hashes)
ids=manifest['ids']; nums=[238,245,253,258,261,264,270,281,288,290]
notes=[
'上下の目盛をまたぐ移動枠と読取り線が値の操作を説明し、元の赤線だけの構造から独自性は改善。通常の操作と長文は安定。ただしforced colorsのつまみ位置は残存不具合。',
'青灰の頭と軸が一体のエナメル留め具になり、旧淡金色より把持点が明快。通常の可読性と狭幅は成立。forced colorsの旧塗り線を除去する必要がある。',
'ネイティブ選択丸との競合は解消したが、現状は普通の紙面上端へ楕円を移した形で、綴じ糸と紙を結ぶ穴・接点・前後関係が見えない。Aの構造的独自性として改善不足と判断。',
'右側の布帯が金属状の留め具を通り、面を留める構造として読める。選択表示との役割が分かれ、長文・RTLでも文字を妨げない。',
'左の折り返した綴じ代と連続金具が紙束をまとめる構造を作り、単一の小さな飾りより成立。文字・選択・操作も安定。',
'縁を一周と下部の断面に絞り、重なる楕円光沢の古さを解消。薄い器の段差が控えめに読め、長文と選択状態も明快。',
'プラン名・用途説明・価格を独立した列に分け、狭幅では価格が下へ移る。色替えのみだった元案から情報構造を改善し、比較用途に適する。',
'投入口の折り返しと下端の薄い折り目で重いアーチを解消し、検索欄と一覧の区別は明快。ただし一覧の説明とbadgeの小文字が4.286:1に留まる。',
'人物印・チーム名・連絡先の行構造が用途を示す。検索対象も連絡先に対応し、長いメールアドレスが折り返す。hover合成面上の最小比4.740:1も確認。',
'書名・著者・棚コードを分け、背の帯で図書一覧の用途を示す。連絡先パーツと構造差があり、検索・長文・選択も安定。']
find={238:[dict(kind='reproducible_rendering',description='forced-colors:active でネイティブつまみ中心がネイティブ軌道中心より14px上に浮く。旧カスタム軌道も残る。portable/gallery双方で再現。',recommendation='forced colorsではカスタム軌道を隠し、thumbの従来margin-topを解除してnative軌道へ揃える。',evidence=['forced-pixel-4.json','evidence-4/pinstripe-range-portable-forced.png','evidence-4/pinstripe-range-gallery-slider-forced.png'])],245:[dict(kind='reproducible_rendering',description='forced colorsでnative軌道の下に旧金色の塗り線が残り、二本の値表示が並ぶ。portable/gallery双方で再現。',recommendation='forced colorsでは残存するカスタムrail/fillを隠し、nativeの値表示へ統一する。',evidence=['evidence-4/enamel-peg-range-portable-slider-forced.png','evidence-4/enamel-peg-range-gallery-slider-forced.png'])],253:[dict(kind='design_judgment',description=notes[2],recommendation='紙に穴や綴じ代を設け、糸が穴を通り表裏へ回る接点と遮蔽を示す。単に楕円を追加した印象から、紙を綴じる構造へ進める。',evidence=['evidence-4/loop-label-choice-portable-rest.png','evidence-4/radios-gallery-sheet.jpg'])],281:[dict(kind='contrast',description='有効項目の説明11px／badge10pxがrgb(101,107,97)、背景rgb(232,227,216)で4.286:1。通常・hover完了・解除後、portable/gallery双方で4.5:1未満。',recommendation='一覧の補助説明とbadgeの文字色を濃くし、通常／hoverの確定状態で4.5:1以上を確保する。',evidence=['contrast-summary-4.json','combos-final-4.json','evidence-4/combos-portable-sheet.jpg','evidence-4/combos-gallery-sheet.jpg'])]}
parts=[]
for id,n,note in zip(ids,nums,notes):
 common=['portableと実galleryの通常・hover入口/確定/退出/再進入/復帰','320px・長文・RTL・reduced-motion・forced-colorsの実画像']
 if n<250: more=['native range Home/End/矢印/PageDown・pointer drag・表示値/フォーム値','単一/双範囲・disabled・現min/max/step変更後のreset正規化'] ; evid=['measurements-4.json','sliders-measurements-4.json','reset-probe-4.json','evidence-4/sliders-portable-sheet.jpg','evidence-4/sliders-gallery-sheet.jpg']
 elif n<280: more=['native radio選択・矢印移動・disabled・form/reset','選択文字と説明のコントラスト'];evid=['measurements-4.json','choices-measurements-4.json','evidence-4/radios-portable-sheet.jpg','evidence-4/radios-gallery-sheet.jpg']
 else:more=['検索・上下キー/Enter・Escape/Tab閉鎖・disabled項目拒否・form/reset','開いた一覧hover往復・空結果・description検索'];evid=['combos-final-4.json','evidence-4/combos-portable-sheet.jpg','evidence-4/combos-gallery-sheet.jpg','evidence-4/combos-portable-access-sheet.jpg','evidence-4/combos-gallery-access-sheet.jpg']
 if n in [270,288,290]:more+=['Vanilla/Reactの展示config一致（ソース比較）'];evid+=['data-parity-4.json']
 parts.append(dict(id=id,number=n,verdict='changes_required' if n in find else 'pass',note=note,findings=find.get(n,[]),evidence=evid,reviewed=common+more))
coverage={'parts':10,'portable':10,'actual_gallery':10,'visually_reviewed_sheets':[str(x.relative_to(p)) for x in sorted((p/'evidence-4').glob('*sheet.jpg'))],'manifest_hashes_match':True,'limits':'特定状態とターゲットの検査。無欠陥保証ではない。form/長文/追加設定は凍結initを実galleryのCSS環境に組み込んだ検査fixtureも使用。Reactは展示configの同一性を比較しReact全操作の別実行は含めない。choices-measurementsのcombo途中失敗はcombos-finalの成功記録で置換。R288の初期合成計算疑義はcolor(srgb)を正規化したcontrast-checkで棄却。'}
result=dict(batch='B008',round=4,overall='changes_required',parts=parts,coverage=coverage,evidence=['review-input-4.json','hash-check-4.json','contrast-summary-4.json','contrast-check-4.py'])
(p/'review-4.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
md='# B008 round 4 独立検査\n\n10件中6件 pass、4件 changes_required。凍結版と実galleryを確認し、現在作者・共有ソースのmanifest hash一致を確認。作者ファイルは変更していない。\n\n'
for part in parts:
 md+=f"## R{part['number']} {part['id']} — {part['verdict']}\n\n{part['note']}\n\n"
 for f in part['findings']:md+=f"- {f['kind']}: {f['description']} 改善案: {f['recommendation']}\n"
 md+='\n証拠: '+', '.join(f'[{v}]({v})' for v in part['evidence'])+'\n\n'
md+='## 範囲と記録\n\n'+coverage['limits']+'\n\n12枚のcontact sheetを全て視認。詳細な状態・フォーム値・色・矩形はJSON、検査コードとPNGも同フォルダに保存。R253は造形上の判断、R238/R245/R281は再現条件と測定を伴う指摘として区別した。\n'
(p/'review-4.md').write_text(md)
print('saved',len(parts),'parts;',len(coverage['visually_reviewed_sheets']),'sheets')
