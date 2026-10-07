'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 銅の留めピンをタブの根元に揃える。 */
export default function CopperPinTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-copper-pin-tabs ${className}`}/>;}
