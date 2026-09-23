'use client';
import React from 'react';
import {type TabsProps} from '../../../../shared/tabs-view';
import {TransitTabsView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 製図の方眼と精密な輪郭。図面をめくる感覚のインターフェース。 */
export default function BlueprintTabs({className='',...props}:TabsProps){return <TransitTabsView mode="blueprint" {...props} className={`sop-blueprint-tabs ${className}`}/>;}
