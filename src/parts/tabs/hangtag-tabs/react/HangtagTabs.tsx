'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 上から吊るした札が選択面になる。 */
export default function HangtagTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-hangtag-tabs ${className}`}/>;}
