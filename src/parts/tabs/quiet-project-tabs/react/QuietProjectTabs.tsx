'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** プロジェクト画面に馴染む角丸タブ。 */
export default function QuietProjectTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-quiet-project-tabs ${className}`}/>;}
