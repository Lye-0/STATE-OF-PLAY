'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 図面の索引から情報パネルへ接続。外側だけに補助線を残し、読む面は明るくする。 */
export default function RungTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-rung-tabs ${className}`}/>;}
