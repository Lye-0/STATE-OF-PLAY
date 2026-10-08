'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 折り畳む三つの見出し札と続く紙面。選択した札の折り返しが本文の入口になる。 */
export default function HangtagTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-hangtag-tabs ${className}`}/>;}
