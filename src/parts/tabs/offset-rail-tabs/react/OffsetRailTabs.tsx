'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 陶器の三つの上縁から一つの読み取り皿を選ぶ。本文面と内壁を同じ輪郭へまとめる。 */
export default function OffsetRailTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-offset-rail-tabs ${className}`}/>;}
