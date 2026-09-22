'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 琥珀色の管と発光数字。選んだチャンネルが目覚める。 */
export default function NixieTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-nixie-tabs ${className}`}/>;}
