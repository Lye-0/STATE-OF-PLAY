'use client';
import React from 'react';
import {type TabsProps} from '../../../../shared/tabs-view';
import {TransitTabsView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 布の帯のような選択面と、下に伸びた切り込み。 */
export default function RibbonTabs({className='',...props}:TabsProps){return <TransitTabsView mode="ribbon" {...props} className={`sop-ribbon-tabs ${className}`}/>;}
