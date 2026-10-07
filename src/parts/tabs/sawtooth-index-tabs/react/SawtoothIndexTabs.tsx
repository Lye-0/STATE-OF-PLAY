'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 鋸歯の索引が選んだ本文面に接続。 */
export default function SawtoothIndexTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-sawtooth-index-tabs ${className}`}/>;}
