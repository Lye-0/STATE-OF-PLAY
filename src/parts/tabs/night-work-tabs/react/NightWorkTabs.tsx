'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 暗い作業面で輪郭が読めるタブ。 */
export default function NightWorkTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-night-work-tabs ${className}`}/>;}
