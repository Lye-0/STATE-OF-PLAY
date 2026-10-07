'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 設定画面の密度を保つ小さなタブ。 */
export default function CompactSettingsTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-compact-settings-tabs ${className}`}/>;}
