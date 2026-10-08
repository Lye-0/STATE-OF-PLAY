'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 二組の折った翼が、章の紙と本文を背へ留めるタブ。左右24pxと28pxの折面を紙の左端の同じ軸へ合わせ、右翼の実際の差込み口と紙の切欠きを接続する。右の返しが紙の端を挟み、選択した章は本文と同じ紙へ続く。操作中は翼の厚みだけが張り、見出しと読む面は固定する。 */
export default function BinderWingTabs({className='',...props}:TabsProps){return <TabsView {...props} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-binder-wing-tabs ${className}`}/>;}
