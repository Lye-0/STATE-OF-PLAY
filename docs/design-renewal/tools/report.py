"""Build a small, self-contained review report; never publish unreviewed parts."""
from pathlib import Path
from PIL import Image
import json,base64,io,html,sys,re
w=Path(__file__).resolve().parents[1];root=w.parents[1]
rows=json.loads((w/'targets.json').read_text());requested=set(sys.argv[1:])
approved=[]
for row in rows:
 if requested and row['batch'] not in requested:continue
 d=w/'batches'/row['batch'];reviews=sorted((p for p in d.glob('review-*.json') if re.fullmatch(r'review-\d+\.json',p.name)),key=lambda p:int(p.stem.split('-')[1]))
 if not reviews:continue
 review=json.loads(reviews[-1].read_text());part=next((p for p in review['parts'] if p['id']==row['id']),None)
 if review['overall']!='pass' or not part or part['verdict']!='pass':continue
 approved.append((row,part,review))
def esc(t):return html.escape(str(t),quote=True)
def figure(path,label):
 if not path.exists():return ''
 im=Image.open(path).convert('RGB');im.thumbnail((700,700));buf=io.BytesIO();im.save(buf,format='WEBP',quality=83,method=6);url='data:image/webp;base64,'+base64.b64encode(buf.getvalue()).decode()
 return f'<figure><img width="{im.width}" height="{im.height}" loading="lazy" src="{url}" alt="{esc(label)}"><figcaption>{esc(label)}</figcaption></figure>'
parts=[]
for row,part,review in approved:
 meta=json.loads((root/'src/parts'/row['category']/row['id']/'meta.json').read_text());d=w/'batches'/row['batch'];photos=d/'captures/photos'
 # Prefer the last gallery state capture if this part alone was rechecked.
 rounds=sorted((d/'captures').glob('round-*'),key=lambda p:int(p.name.split('-')[-1]))
 for r in rounds:
  if (r/'photos'/f"{row['id']}-stage.png").exists():photos=r/'photos'
 assert (photos/f"{row['id']}-stage.png").exists(),f"Missing gallery evidence: {row['id']}"
 assert (photos/f"{row['id']}-narrow.png").exists(),f"Missing narrow evidence: {row['id']}"
 before=w/'evidence/baseline'/f"{row['id']}-stage.png"
 assert before.exists(),f"Missing original gallery evidence: {row['id']}"
 images=figure(before,'修正前・元の展示')+figure(photos/f"{row['id']}-stage.png",'修正後・展示の初期状態')+figure(photos/f"{row['id']}-narrow.png",'修正後・320pxの操作状態')
 if row['category']=='popups':
  assert (photos/f"{row['id']}-expanded.png").exists(),f"Missing open dialog evidence: {row['id']}"
  assert (photos/f"{row['id']}-mobile.png").exists(),f"Missing mobile dialog evidence: {row['id']}"
  images+=figure(w/'evidence/baseline'/f"{row['id']}-expanded.png",'修正前・独立した実ダイアログ')+figure(photos/f"{row['id']}-expanded.png",'修正後・実際に開いたダイアログ')+figure(photos/f"{row['id']}-mobile.png",'修正後・320pxで開いたダイアログ')
 if row['category']=='comboboxes':
  assert (w/'evidence/baseline'/f"{row['id']}-expanded.png").exists(),f"Missing original open candidates: {row['id']}"
  assert (photos/f"{row['id']}-expanded.png").exists(),f"Missing gallery open candidates: {row['id']}"
  native=sorted((d/'captures').glob('combobox-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  narrow=next((p/f"{row['id']}-narrow-320.png" for p in reversed(native) if (p/f"{row['id']}-narrow-320.png").exists()),None)
  assert narrow is not None,f"Missing long native candidates: {row['id']}"
  images+=figure(w/'evidence/baseline'/f"{row['id']}-expanded.png",'修正前・配布版で開いた候補')+figure(photos/f"{row['id']}-expanded.png",'修正後・実ギャラリーの候補')+figure(narrow,'修正後・配布版の320px長文候補')
 if row['category']=='toasts':
  beforeNotice=w/'evidence/baseline'/f"{row['id']}-notice.png"
  assert beforeNotice.exists(),f"Missing original actual notice: {row['id']}"
  native=sorted((d/'captures').glob('toasts-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if (p/f"{row['id']}-initial.png").exists() and (p/f"{row['id']}-narrow-320.png").exists()),None)
  assert actual is not None,f"Missing actual exported notice: {row['id']}"
  images+=figure(beforeNotice,'修正前・配布版の実通知')+figure(actual/f"{row['id']}-initial.png",'修正後・配布版で通知を発行')+figure(actual/f"{row['id']}-narrow-320.png",'修正後・320pxの長文通知')
 if row['category']=='hints':
  beforePanel=w/'evidence/baseline'/f"{row['id']}-expanded.png"
  assert beforePanel.exists(),f"Missing original actual hint: {row['id']}"
  assert (photos/f"{row['id']}-expanded.png").exists(),f"Missing gallery open hint: {row['id']}"
  native=sorted((d/'captures').glob('hints-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if (p/f"{row['id']}-initial.png").exists() and (p/f"{row['id']}-narrow-320.png").exists()),None)
  assert actual is not None,f"Missing exported long hint: {row['id']}"
  images+=figure(beforePanel,'修正前・配布版で開いた補足')+figure(photos/f"{row['id']}-expanded.png",'修正後・実ギャラリーで開いた補足')+figure(actual/f"{row['id']}-initial.png",'修正後・配布版の補足')+figure(actual/f"{row['id']}-narrow-320.png",'修正後・320pxの長文補足')
 if row['category']=='progress':
  beforeMeter=w/'evidence/baseline'/f"{row['id']}-progress.png"
  assert beforeMeter.exists(),f"Missing original progress: {row['id']}"
  native=sorted((d/'captures').glob('progress-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in ['0','50','100','narrow-320','indeterminate'])),None)
  assert actual is not None,f"Missing real progress states: {row['id']}"
  images+=figure(beforeMeter,'修正前・配布版の進捗')+figure(actual/f"{row['id']}-0.png",'修正後・0%')+figure(actual/f"{row['id']}-50.png",'修正後・50%')+figure(actual/f"{row['id']}-100.png",'修正後・100%')+figure(actual/f"{row['id']}-indeterminate.png",'修正後・動きを軽減した未確定状態')+figure(actual/f"{row['id']}-narrow-320.png",'修正後・320pxの長文と範囲変更')
 if row['category']=='uploads':
  beforeUpload=w/'evidence/baseline'/f"{row['id']}-upload.png"
  assert beforeUpload.exists(),f"Missing original upload: {row['id']}"
  native=sorted((d/'captures').glob('uploads-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in ['initial','selected','narrow-320'])),None)
  assert actual is not None,f"Missing actual upload selection: {row['id']}"
  images+=figure(beforeUpload,'修正前・配布版の受け面')+figure(actual/f"{row['id']}-initial.png",'修正後・配布版の受け面')+figure(actual/f"{row['id']}-selected.png",'修正後・実ファイルを選択')+figure(actual/f"{row['id']}-narrow-320.png",'修正後・320pxの全文ファイル名')
 if row['category']=='datepickers':
  beforeCalendar=w/'evidence/baseline'/f"{row['id']}-calendar.png"
  assert beforeCalendar.exists(),f"Missing original open calendar: {row['id']}"
  native=sorted((d/'captures').glob('dates-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in ['initial','narrow-320','rtl','forced'])),None)
  assert actual is not None,f"Missing actual open calendar: {row['id']}"
  images+=figure(beforeCalendar,'修正前・配布版で開いた日付選択')+figure(actual/f"{row['id']}-initial.png",'修正後・配布版の日付選択')+figure(actual/f"{row['id']}-narrow-320.png",'修正後・320pxと長い見出し')+figure(actual/f"{row['id']}-rtl.png",'修正後・右から左への表示')
 if row['category']=='pagination':
  beforePages=w/'evidence/baseline'/f"{row['id']}-pages.png"
  assert beforePages.exists(),f"Missing original real pages: {row['id']}"
  native=sorted((d/'captures').glob('pages-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in ['initial','1','12','narrow-320'])),None)
  assert actual is not None,f"Missing actual page boundaries: {row['id']}"
  images+=figure(beforePages,'修正前・配布版のページ送り')+figure(actual/f"{row['id']}-initial.png",'修正後・配布版の実番号')+figure(actual/f"{row['id']}-1.png",'修正後・先頭ページ')+figure(actual/f"{row['id']}-12.png",'修正後・末尾ページ')+figure(actual/f"{row['id']}-narrow-320.png",'修正後・320pxと大きなページ番号')
 if row['category']=='breadcrumbs':
  beforeTrail=w/'evidence/baseline'/f"{row['id']}-trail.png"
  assert beforeTrail.exists(),f"Missing original real trail: {row['id']}"
  native=sorted((d/'captures').glob('trails-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in ['initial','expanded','narrow-320','menu-rtl-320'])),None)
  assert actual is not None,f"Missing native hierarchy/menu: {row['id']}"
  images+=figure(beforeTrail,'修正前・配布版の階層経路')+figure(actual/f"{row['id']}-initial.png",'修正後・実際の階層経路')+figure(actual/f"{row['id']}-expanded.png",'修正後・省略階層を開いたメニュー')+figure(actual/f"{row['id']}-narrow-320.png",'修正後・320pxの長い階層')+figure(actual/f"{row['id']}-menu-rtl-320.png",'修正後・320pxと右から左のメニュー')
 if row['category']=='badges':
  beforeBadge=w/'evidence/baseline'/f"{row['id']}-badge.png"
  assert beforeBadge.exists(),f"Missing original real tag: {row['id']}"
  native=sorted((d/'captures').glob('badges-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in ['initial','selected','narrow-320','long-rtl-320'])),None)
  assert actual is not None,f"Missing native long tag: {row['id']}"
  images+=figure(beforeBadge,'修正前・配布版のタグ')+figure(actual/f"{row['id']}-initial.png",'修正後・配布版の名称と実件数')+figure(actual/f"{row['id']}-selected.png",'修正後・実選択の状態')+figure(actual/f"{row['id']}-narrow-320.png",'修正後・320pxの長い名称と9桁件数')+figure(actual/f"{row['id']}-long-rtl-320.png",'修正後・320pxと右から左の長い名称')
 if row['category']=='avatars':
  beforeAvatar=w/'evidence/baseline'/f"{row['id']}-avatar.png"
  assert beforeAvatar.exists(),f"Missing original real avatar: {row['id']}"
  native=sorted((d/'captures').glob('avatars-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in ['initial','image-fallback','narrow-320','long-rtl-320'])),None)
  assert actual is not None,f"Missing native avatar fallback/long name: {row['id']}"
  images+=figure(beforeAvatar,'修正前・配布版の人物紹介')+figure(actual/f"{row['id']}-initial.png",'修正後・実人物と状態')+figure(actual/f"{row['id']}-image-fallback.png",'修正後・画像と読込失敗時の代替')+figure(actual/f"{row['id']}-portrait.png",'修正後・実写真の肖像')+figure(actual/f"{row['id']}-narrow-320.png",'修正後・320pxの長い人物名')+figure(actual/f"{row['id']}-long-rtl-320.png",'修正後・320pxと右から左の長い人物名')
 if row['category']=='colors':
  beforeColor=w/'evidence/baseline'/f"{row['id']}-color.png"
  assert beforeColor.exists(),f"Missing original real color picker: {row['id']}"
  native=sorted((d/'captures').glob('colors-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in ['initial','selected','invalid','narrow-320','long-rtl-320','forced-dark'])),None)
  assert actual is not None,f"Missing native color value/error/RTL evidence: {row['id']}"
  images+=figure(beforeColor,'修正前・配布版のカラー選択')+figure(actual/f"{row['id']}-initial.png",'修正後・色面と実軸')+figure(actual/f"{row['id']}-selected.png",'修正後・実HEX値を入力')+figure(actual/f"{row['id']}-invalid.png",'修正後・無効値の入力エラー')+figure(actual/f"{row['id']}-narrow-320.png",'修正後・320pxと長い見出し')+figure(actual/f"{row['id']}-long-rtl-320.png",'修正後・右から左への表示')+figure(actual/f"{row['id']}-forced-dark.png",'修正後・暗い強制配色')
 if row['category']=='skeletons':
  beforeSkeleton=w/'evidence/baseline'/f"{row['id']}-skeleton.png"
  beforeLoaded=w/'evidence/baseline'/f"{row['id']}-loaded.png"
  assert beforeSkeleton.exists() and beforeLoaded.exists(),f"Missing original waiting/loaded skeleton: {row['id']}"
  native=sorted((d/'captures').glob('skeletons-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in ['initial','loaded','waiting-ltr-320','loaded-ltr-320','loaded-rtl-320','forced-waiting','forced-loaded'])),None)
  assert actual is not None,f"Missing actual loading/content/RTL/forced skeleton: {row['id']}"
  images+=figure(beforeSkeleton,'修正前・配布版の読み込み')+figure(beforeLoaded,'修正前・配布版の実内容')+figure(actual/f"{row['id']}-initial.png",'修正後・配布版の読み込み')+figure(actual/f"{row['id']}-loaded.png",'修正後・同じ組版の実内容')+figure(actual/f"{row['id']}-waiting-ltr-320.png",'修正後・320pxで読み込み')+figure(actual/f"{row['id']}-loaded-ltr-320.png",'修正後・320pxで長い実内容')+figure(actual/f"{row['id']}-loaded-rtl-320.png",'修正後・右から左への実内容')+figure(actual/f"{row['id']}-forced-waiting.png",'修正後・強制配色で読み込み')+figure(actual/f"{row['id']}-forced-loaded.png",'修正後・強制配色の実内容')
 if row['category']=='commands':
  beforeCommand=w/'evidence/baseline'/f"{row['id']}-command.png"
  beforeOpen=w/'evidence/baseline'/f"{row['id']}-open.png"
  assert beforeCommand.exists() and beforeOpen.exists(),f"Missing original real launcher/dialog: {row['id']}"
  native=sorted((d/'captures').glob('commands-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in ['initial','open','error','empty','narrow-320','long-rtl-320','forced-dark'])),None)
  assert actual is not None,f"Missing native command controls/async/error/empty/long/RTL/forced evidence: {row['id']}"
  images+=figure(beforeCommand,'修正前・配布版の起動面')+figure(beforeOpen,'修正前・実際に開いた配布版のパレット')+figure(actual/f"{row['id']}-initial.png",'修正後・配布版の起動面')+figure(actual/f"{row['id']}-open.png",'修正後・実際に開いたコマンド')+figure(actual/f"{row['id']}-error.png",'修正後・実行失敗の通知')+figure(actual/f"{row['id']}-empty.png",'修正後・候補が空の状態')+figure(actual/f"{row['id']}-narrow-320.png",'修正後・320pxの長い実コマンド')+figure(actual/f"{row['id']}-long-rtl-320.png",'修正後・右から左への実コマンド')+figure(actual/f"{row['id']}-forced-dark.png",'修正後・暗い強制配色')
  for name,label in [('path-1','修正後・実祖先が一階層ある状態'),('path-2','修正後・実祖先が二階層ある状態')]:
   assert (actual/f"{row['id']}-{name}.png").exists(),f"Missing actual ancestor face: {row['id']}"
   images+=figure(actual/f"{row['id']}-{name}.png",label)
 if row['category']=='contextmenus':
  beforeContext=w/'evidence/baseline'/f"{row['id']}-context.png"
  beforeOpen=w/'evidence/baseline'/f"{row['id']}-open.png"
  assert beforeContext.exists() and beforeOpen.exists(),f"Missing original actual Context target/menu: {row['id']}"
  native=sorted((d/'captures').glob('contexts-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  names=['initial','open','checked','submenu','error','empty','narrow-320','long-rtl-320','forced-dark']
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in names)),None)
  assert actual is not None,f"Missing native Context checks/submenu/error/empty/long/RTL/forced evidence: {row['id']}"
  images+=figure(beforeContext,'修正前・配布版の実操作対象')+figure(beforeOpen,'修正前・実際に開いた配布版のメニュー')
  for name,label in [('initial','修正後・配布版の実操作対象'),('open','修正後・実際に開いた操作メニュー'),('checked','修正後・実チェック操作'),('submenu','修正後・実サブメニュー'),('error','修正後・操作失敗の通知'),('empty','修正後・操作が空の状態'),('narrow-320','修正後・320pxの長い実メニュー'),('long-rtl-320','修正後・右から左への実メニュー'),('forced-dark','修正後・暗い強制配色')]:images+=figure(actual/f"{row['id']}-{name}.png",label)
 if row['category']=='searchbars':
  beforeSearch=w/'evidence/baseline'/f"{row['id']}-search.png"
  assert beforeSearch.exists(),f"Missing original actual search: {row['id']}"
  native=sorted((d/'captures').glob('search-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in ['initial','closed','async','error','empty','results','long-ltr-320','long-rtl-320','forced-dark'])),None)
  assert actual is not None,f"Missing actual search results/error/empty/RTL/forced: {row['id']}"
  images+=figure(beforeSearch,'修正前・配布版の検索と候補')+figure(actual/f"{row['id']}-closed.png",'修正後・候補を閉じた実検索')+figure(actual/f"{row['id']}-initial.png",'修正後・実候補を開いた検索')+figure(actual/f"{row['id']}-async.png",'修正後・非同期の実候補')+figure(actual/f"{row['id']}-error.png",'修正後・検索失敗と再試行')+figure(actual/f"{row['id']}-empty.png",'修正後・空の結果')+figure(actual/f"{row['id']}-long-ltr-320.png",'修正後・320pxの長い実候補・説明・補足')+figure(actual/f"{row['id']}-long-rtl-320.png",'修正後・320pxと右から左の候補')+figure(actual/f"{row['id']}-forced-dark.png",'修正後・暗い強制配色')
 if row['category']=='wizards':
  beforeWizard=w/'evidence/baseline'/f"{row['id']}-wizard.png"
  assert beforeWizard.exists(),f"Missing original actual wizard: {row['id']}"
  native=sorted((d/'captures').glob('wizards-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in ['initial','next','complete','error','long-ltr-320','long-rtl-320','empty','forced-dark'])),None)
  assert actual is not None,f"Missing actual wizard next/complete/validation/RTL/empty/forced: {row['id']}"
  forcedPhoto=d/'captures'/f"reviewer-forced-{review['round']}"/f"{row['id']}-dark-next.png"
  if not forcedPhoto.exists():forcedPhoto=actual/f"{row['id']}-forced-dark.png"
  images+=figure(beforeWizard,'修正前・配布版の実手順')+figure(actual/f"{row['id']}-initial.png",'修正後・実手順と入力面')+figure(actual/f"{row['id']}-next.png",'修正後・次の実入力へ進む')+figure(actual/f"{row['id']}-complete.png",'修正後・native入力を保持して完了')+figure(actual/f"{row['id']}-error.png",'修正後・確認処理が返した実エラー')+figure(actual/f"{row['id']}-long-ltr-320.png",'修正後・320pxと長い実手順・入力名')+figure(actual/f"{row['id']}-long-rtl-320.png",'修正後・320pxと右から左の手順')+figure(actual/f"{row['id']}-empty.png",'修正後・手順がない状態')+figure(forcedPhoto,'修正後・暗い強制配色')
 if row['category']=='timelines':
  beforeTimeline=w/'evidence/baseline'/f"{row['id']}-timeline.png"
  beforeExpanded=w/'evidence/baseline'/f"{row['id']}-expanded.png"
  assert beforeTimeline.exists() and beforeExpanded.exists(),f"Missing original actual timeline: {row['id']}"
  native=sorted((d/'captures').glob('timelines-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in ['initial','expanded','long-ltr-320','long-rtl-320','empty','forced-dark'])),None)
  assert actual is not None,f"Missing actual timeline expansion/long/RTL/empty/forced: {row['id']}"
  images+=figure(beforeTimeline,'修正前・配布版の実履歴')+figure(beforeExpanded,'修正前・実記録を開いた状態')+figure(actual/f"{row['id']}-initial.png",'修正後・配布版の実履歴')+figure(actual/f"{row['id']}-expanded.png",'修正後・実本文を開いた状態')+figure(actual/f"{row['id']}-long-ltr-320.png",'修正後・320pxと長い実日時・本文')+figure(actual/f"{row['id']}-long-rtl-320.png",'修正後・320pxと右から左の履歴')+figure(actual/f"{row['id']}-empty.png",'修正後・空の履歴')+figure(actual/f"{row['id']}-forced-dark.png",'修正後・暗い強制配色')
 if row['category']=='ratings':
  beforeRating=w/'evidence/baseline'/f"{row['id']}-rating.png"
  assert beforeRating.exists(),f"Missing original real rating: {row['id']}"
  native=sorted((d/'captures').glob('ratings-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in ['initial','empty','max','narrow-320','long-rtl-320','forced-dark'])),None)
  assert actual is not None,f"Missing native rating range/RTL/dark forced evidence: {row['id']}"
  images+=figure(beforeRating,'修正前・配布版の評価')+figure(actual/f"{row['id']}-initial.png",'修正後・配布版の実評価')+figure(actual/f"{row['id']}-empty.png",'修正後・未評価')+figure(actual/f"{row['id']}-max.png",'修正後・最大評価')+figure(actual/f"{row['id']}-narrow-320.png",'修正後・320pxと10段階評価')+figure(actual/f"{row['id']}-long-rtl-320.png",'修正後・右から左への表示')+figure(actual/f"{row['id']}-forced-dark.png",'修正後・暗い強制配色')
 if row['category']=='numbers':
  beforeNumber=w/'evidence/baseline'/f"{row['id']}-number.png"
  assert beforeNumber.exists(),f"Missing original real number field: {row['id']}"
  native=sorted((d/'captures').glob('numbers-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  actual=next((p for p in reversed(native) if all((p/f"{row['id']}-{name}.png").exists() for name in ['initial','min','max','narrow-320'])),None)
  assert actual is not None,f"Missing native number limits: {row['id']}"
  images+=figure(beforeNumber,'修正前・配布版の数値操作')+figure(actual/f"{row['id']}-initial.png",'修正後・配布版の値と操作面')+figure(actual/f"{row['id']}-min.png",'修正後・最小値')+figure(actual/f"{row['id']}-max.png",'修正後・最大値')+figure(actual/f"{row['id']}-narrow-320.png",'修正後・320pxの長い数値と単位')
 if row['category']=='dropdowns':
  images+=figure(photos/f"{row['id']}-expanded.png",'展開した候補・選択済み行')
 # Native switch images distinguish actual OFF and ON even when the gallery starts ON.
 if row['category']=='toggles':
  folders=sorted((d/'captures').glob('reviewer*'))
  for folder in reversed(folders):
   if (folder/f"{row['id']}-on.png").exists():
    images+=figure(folder/f"{row['id']}-on.png",'独立版・ON');break
 parts.append(f'<article id="r{row["number"]}"><header><span>R{row["number"]:03d} · {esc(row["batch"])} · {esc(row["designType"])}</span><h2>{esc(row["name"])}</h2><code>{esc(row["id"])}</code></header><p><strong>以前の指摘</strong><br>{esc(row["auditReason"])}</p><p><strong>修正した構造</strong><br>{esc(meta["description"])}</p><p><strong>独立検査</strong><br>{esc(part["assessment"])}</p><details><summary>画像を見る（単体HTML内蔵）</summary><div class="photos">{images}</div></details></article>')
title='STATE OF PLAY — 修正結果';body=f'''<!doctype html><html lang="ja"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{title}</title><style>body{{margin:0;background:#f2f3f5;color:#243241;font:16px/1.75 system-ui}}main{{max-width:1160px;margin:auto;padding:28px 18px}}h1{{font-size:28px;line-height:1.3}}.note{{background:white;padding:20px;border:1px solid #c4ced7;border-radius:8px}}article{{margin:24px 0;padding:24px;background:white;border:1px solid #c4ced7;border-radius:8px;content-visibility:auto;contain-intrinsic-size:auto 470px}}h2{{margin:4px 0;font-size:23px}}header>span{{color:#53677b;font-size:14px}}code{{overflow-wrap:anywhere}}summary{{cursor:pointer;padding:12px;border:1px solid #c4ced7;border-radius:4px}}.photos{{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr));gap:16px}}figure{{margin:16px 0;min-width:0}}img{{display:block;max-width:100%;height:auto;background:#181d23;border-radius:4px}}figcaption{{font-size:14px;color:#53677b}}@media print{{article{{content-visibility:visible;break-inside:avoid}}details{{display:block}}}}</style><main><h1>{title}</h1><div class="note"><p>独立検査に合格した {len(approved)} 件。全修正対象は517件です。番号は以前のR番号を維持しています。</p><p>画像はこのHTMLへ内蔵しています。各項目の「画像を見る」を開いて比較できます。外部ファイルや通信は不要です。</p><p>通常動作・狭幅・動き軽減・強制色と、各部品の操作を確認しています。実機タッチとスクリーンリーダーの読み上げは未確認です。合格判定は固定した検査基準に基づく担当者の評価です。</p></div>{''.join(parts)}</main></html>'''
target=w/('result-'+('-'.join(sorted(requested)) if requested else 'all')+'.html');target.write_text(body);print(json.dumps({'file':str(target),'parts':len(approved),'bytes':target.stat().st_size}))
