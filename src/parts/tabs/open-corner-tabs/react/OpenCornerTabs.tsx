'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 石の展示台の三つの座標から本文を選ぶ。見出しは上のくぼみ、本文は平たい天板に分ける。 */
export default function OpenCornerTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-open-corner-tabs ${className}`}/>;}
