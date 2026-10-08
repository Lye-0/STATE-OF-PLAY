'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 本文の下の差込み口から、索引の足を出すタブ。6pxの口と選択した足の上端を同じ紙へつなぎ、未選択の足は一段沈めた紙色へ保つ。本文の下から取り出す配置は保ち、読む本文に強い影や大きい囲いを足さない。 */
export default function NegativeSlotTabs({className='',...props}:TabsProps){return <TabsView {...props} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-negative-slot-tabs ${className}`}/>;}
