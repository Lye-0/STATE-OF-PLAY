'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 明るい背景と小さな影。文章と情報を静かに整理する。 */
export default function PaperTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-paper-tabs ${className}`}/>;}
