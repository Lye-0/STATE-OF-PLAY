'use client';
import React from 'react';
import SettingsAccordion from './SettingsAccordion';
const items=[
{value:"section-1",title:"通知",subtitle:"Notifications",badge:"PREFS",content:<> <p>必要なタイミングに、必要な通知だけ。通知を受け取る方法を選択できます。</p><label className="sop-panel-label"><span>メールで受け取る</span><input type="checkbox" defaultChecked /></label><label className="sop-panel-label"><span>アプリ内に表示する</span><input type="checkbox" /></label><label className="sop-panel-label"><span>週次サマリー</span><input type="checkbox" /></label> </>},
{value:"section-2",title:"表示",subtitle:"Appearance",badge:"AUTO",content:<> <p>見やすい密度と、動きの量。端末や好みに合わせて調整してください。</p><label className="sop-panel-label"><span>コンパクトな表示</span><input type="checkbox" defaultChecked /></label><label className="sop-panel-label"><span>アニメーションを減らす</span><input type="checkbox" defaultChecked /></label><label className="sop-panel-label"><span>コントラストを高くする</span><input type="checkbox" /></label> </>},
{value:"section-3",title:"プライバシー",subtitle:"Privacy",badge:"LOCAL",content:<> <p>この展示の設定操作はページ内だけで動作します。外部サービスへの送信は行いません。</p><label className="sop-panel-label"><span>匿名の利用情報を共有</span><input type="checkbox" defaultChecked /></label><label className="sop-panel-label"><span>おすすめ表示を有効にする</span><input type="checkbox" defaultChecked /></label><label className="sop-panel-label"><span>履歴を端末に保存</span><input type="checkbox" defaultChecked /></label> </>}
];
export default function Example(){return <SettingsAccordion items={items} defaultExpanded={['section-1']}/>;}
