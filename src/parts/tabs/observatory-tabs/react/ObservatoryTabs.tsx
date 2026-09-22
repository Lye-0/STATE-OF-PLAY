'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 星図の気配と円弧のレール。夜空をたどる切り替え。 */
export default function ObservatoryTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-observatory-tabs ${className}`}/>;}
