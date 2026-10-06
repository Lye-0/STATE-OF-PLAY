'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 見出しを細い棚の上下に配置し、選択面だけが手前へ張り出す。 */
export default function SplitLedgeTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-split-ledge-tabs ${className}`}/>;}
