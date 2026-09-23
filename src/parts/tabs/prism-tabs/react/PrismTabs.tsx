'use client';
import React from 'react';
import {type TabsProps} from '../../../../shared/tabs-view';
import {TransitTabsView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 切り欠いた結晶と偏光。選択が移るたび、光の面が変わる。 */
export default function PrismTabs({className='',...props}:TabsProps){return <TransitTabsView mode="prism" {...props} className={`sop-prism-tabs ${className}`}/>;}
