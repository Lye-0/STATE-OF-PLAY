'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 写真のマットを三つのタブで切り替える。外のフレームと本文の白い紙面を分ける。 */
export default function CopperPinTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-copper-pin-tabs ${className}`}/>;}
