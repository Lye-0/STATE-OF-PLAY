'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 細いピンを打ち込む選択表示。 */
export default function CopperPinTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-copper-pin-tabs ${className}`}/>;}
