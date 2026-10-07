'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 背表紙からせり出す見出し。 */
export default function BinderWingTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-binder-wing-tabs ${className}`}/>;}
