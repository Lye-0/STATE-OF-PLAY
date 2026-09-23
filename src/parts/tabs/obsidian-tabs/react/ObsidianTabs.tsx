'use client';
import React from 'react';
import {type TabsProps} from '../../../../shared/tabs-view';
import {TransitTabsView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 黒い石の研磨面と深い溝。主張しすぎず、存在感のあるタブ。 */
export default function ObsidianTabs({className='',...props}:TabsProps){return <TransitTabsView mode="fault" {...props} className={`sop-obsidian-tabs ${className}`}/>;}
