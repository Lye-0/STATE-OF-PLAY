'use client';
import React from 'react';
import {type TabsProps} from '../../../../shared/tabs-view';
import {TransitTabsView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 深い紫の布と、柔らかく沈む選択面。 */
export default function VelvetTabs({className='',...props}:TabsProps){return <TransitTabsView mode="curtain" {...props} className={`sop-velvet-tabs ${className}`}/>;}
