'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 横に並べるだけではない、縦型ナビゲーションのタブ。 */
export default function SidebarTabs({orientation='vertical',className='',...props}:TabsProps){return <TabsView {...props} orientation={orientation} className={`sop-sidebar-tabs ${className}`}/>;}
