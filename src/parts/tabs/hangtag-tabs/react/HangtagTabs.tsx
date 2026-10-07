'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 吊り札の紐を上に残し、選択札の下に解説を置く。 */
export default function HangtagTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-hangtag-tabs ${className}`}/>;}
