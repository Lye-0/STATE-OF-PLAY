'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 塗りを抑えた枠と小さな状態マーク。 */
export default function OutlineTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-outline-tabs ${className}`}/>;}
