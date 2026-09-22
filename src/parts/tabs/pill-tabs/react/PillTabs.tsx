'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 丸い選択面と落ち着いた青灰色。小さな画面にも。 */
export default function PillTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-pill-tabs ${className}`}/>;}
