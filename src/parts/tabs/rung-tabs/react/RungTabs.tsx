'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 梯子の横桟に見出しを載せる。 */
export default function RungTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-rung-tabs ${className}`}/>;}
