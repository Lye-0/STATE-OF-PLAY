'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** コンパクトな余白と控えめな色。ツールや設定画面へ。 */
export default function CompactTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-compact-tabs ${className}`}/>;}
