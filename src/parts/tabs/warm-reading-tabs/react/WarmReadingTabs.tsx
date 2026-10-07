'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 読み物向けのゆったりした索引。 */
export default function WarmReadingTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-warm-reading-tabs ${className}`}/>;}
