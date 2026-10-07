'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 背の傾斜を持つ活版の索引。 */
export default function SlantedSpineTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-slanted-spine-tabs ${className}`}/>;}
