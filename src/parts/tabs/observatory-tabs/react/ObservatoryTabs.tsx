'use client';
import React from 'react';
import {type TabsProps} from '../../../../shared/tabs-view';
import {TransitTabsView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 星図の気配と円弧のレール。夜空をたどる切り替え。 */
export default function ObservatoryTabs({className='',...props}:TabsProps){return <TransitTabsView mode="orbit" {...props} className={`sop-observatory-tabs ${className}`}/>;}
