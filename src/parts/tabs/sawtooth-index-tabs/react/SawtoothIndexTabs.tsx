'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 乗換駅の上に固定タブ、下に駅の案内面。選択点から本文へ接続する一本の線を作る。 */
export default function SawtoothIndexTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-sawtooth-index-tabs ${className}`}/>;}
