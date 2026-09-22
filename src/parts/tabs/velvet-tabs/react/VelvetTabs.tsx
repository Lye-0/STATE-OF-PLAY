'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 深い紫の布と、柔らかく沈む選択面。 */
export default function VelvetTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-velvet-tabs ${className}`}/>;}
