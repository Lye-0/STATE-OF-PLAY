'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 横桟の下に内容面を吊り下げる。 */
export default function RungTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-rung-tabs ${className}`}/>;}
