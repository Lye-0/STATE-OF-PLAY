'use client';
import React from 'react';
import {type TabsProps} from '../../../../shared/tabs-view';
import {TransitTabsView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 削り出しの銅の指標が、沈んだレールの上を移動する。 */
export default function CopperTabs({className='',...props}:TabsProps){return <TransitTabsView mode="copper" {...props} className={`sop-copper-tabs ${className}`}/>;}
