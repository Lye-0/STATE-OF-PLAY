'use client';
import React from 'react';
import {type TabsProps} from '../../../../shared/tabs-view';
import {TransitTabsView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** レンズの縁の反射と、明るいガラスの指標。 */
export default function OpticTabs({className='',...props}:TabsProps){return <TransitTabsView mode="iris" {...props} className={`sop-optic-tabs ${className}`}/>;}
