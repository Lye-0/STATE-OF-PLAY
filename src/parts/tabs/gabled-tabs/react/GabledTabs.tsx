'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 切妻の屋根と本文の床を一体にする。 */
export default function GabledTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-gabled-tabs ${className}`}/>;}
