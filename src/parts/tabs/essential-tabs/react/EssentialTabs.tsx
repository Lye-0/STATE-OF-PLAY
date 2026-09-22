'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 読みやすいラベルと明確な選択面。日常の画面へ。 */
export default function EssentialTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-essential-tabs ${className}`}/>;}
