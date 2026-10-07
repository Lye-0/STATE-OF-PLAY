'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 山形の端で選択した索引を示す。 */
export default function SawtoothIndexTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-sawtooth-index-tabs ${className}`}/>;}
