'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 布の帯のような選択面と、下に伸びた切り込み。 */
export default function RibbonTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-ribbon-tabs ${className}`}/>;}
