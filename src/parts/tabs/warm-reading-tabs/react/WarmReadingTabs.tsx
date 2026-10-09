'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 章番号と見出しを並べた索引と、余白のある読書面。選択を下線で示し、本文の左余白を一本の罫線で区切る。 */
export default function WarmReadingTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-warm-reading-tabs ${className}`}/>;}
