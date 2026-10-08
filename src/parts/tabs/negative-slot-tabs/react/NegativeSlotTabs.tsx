'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 本の下端の索引からページを選ぶ。タブを下に置き、選択した章と本文の地をつなぐ。 */
export default function NegativeSlotTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-negative-slot-tabs ${className}`}/>;}
