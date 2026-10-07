'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 上下二本のレールで内容を区切る。 */
export default function OffsetRailTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-offset-rail-tabs ${className}`}/>;}
