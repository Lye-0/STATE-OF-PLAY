'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 選択項目の対角だけを囲む。 */
export default function OpenCornerTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-open-corner-tabs ${className}`}/>;}
