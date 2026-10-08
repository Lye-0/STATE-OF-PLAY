'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 型押しした背と、指を掛ける半円の切欠きを持つ保存函のタブ。章扉の丸い上の折返しを、浅い掘込みの本文面へ接続する。番号の小さい型押しをその断面へ揃え、紫の配色や強い影を使わず、函の切り欠きと掘込みで材質を示す。 */
export default function EmbossedArchiveTabs({className='',...props}:TabsProps){return <TabsView {...props} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-embossed-archive-tabs ${className}`}/>;}
