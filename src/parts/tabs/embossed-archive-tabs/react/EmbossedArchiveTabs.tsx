'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 書庫の浮彫り番号と平面の文書を分ける。 */
export default function EmbossedArchiveTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-embossed-archive-tabs ${className}`}/>;}
