'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 縦の登録番号と横の見出しをずらし、現在の資料を示す。 */
export default function NotebookRegisterTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-notebook-register-tabs ${className}`}/>;}
