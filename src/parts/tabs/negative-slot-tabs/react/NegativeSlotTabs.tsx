'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 切り抜いた窓から選択面を見せるネガの構造。 */
export default function NegativeSlotTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-negative-slot-tabs ${className}`}/>;}
