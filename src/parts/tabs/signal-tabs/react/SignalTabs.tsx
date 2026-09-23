'use client';
import React from 'react';
import {type TabsProps} from '../../../../shared/tabs-view';
import {TransitTabsView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 走査線の上に緑の文字が浮かぶ、静かな端末。 */
export default function SignalTabs({className='',...props}:TabsProps){return <TransitTabsView mode="signal" {...props} className={`sop-signal-tabs ${className}`}/>;}
