'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 横の見出しと広い本文面を二本の支柱で支える。選択位置は柱ではなく開口の上端で示す。 */
export default function FloatingBookmarkTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-floating-bookmark-tabs ${className}`}/>;}
