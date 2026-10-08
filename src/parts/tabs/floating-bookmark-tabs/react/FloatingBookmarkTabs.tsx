'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 栞の切欠きを本文の差込み口へつなぐタブ。12pxのV字を持つ帯の足が、本文の6pxの口へ重なり、帯が浮いて見える隙間を除く。選択した帯だけを抑えた葉色へし、本文は読みやすい紙色へ保つ。 */
export default function FloatingBookmarkTabs({className='',...props}:TabsProps){return <TabsView {...props} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-floating-bookmark-tabs ${className}`}/>;}
