'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 屋根のように輪郭が立ち上がる。 */
export default function GabledTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-gabled-tabs ${className}`}/>;}
