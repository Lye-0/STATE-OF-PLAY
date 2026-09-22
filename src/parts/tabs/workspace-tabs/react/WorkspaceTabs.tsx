'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** アイコンと見出しをすっきり整えた実用的なタブ。 */
export default function WorkspaceTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-workspace-tabs ${className}`}/>;}
