'use client';
import React from 'react';
import {type TabsProps} from '../../../../shared/tabs-view';
import {TransitTabsView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 目盛りの上を跳ねる立体的なキー。わずかな弾みを添える。 */
export default function KineticTabs({className='',...props}:TabsProps){return <TransitTabsView mode="split" {...props} className={`sop-kinetic-tabs ${className}`}/>;}
