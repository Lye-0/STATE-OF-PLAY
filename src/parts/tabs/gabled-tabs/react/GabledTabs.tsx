'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 帳簿の上欄を三つの見出しに分ける。選択した列のインク面と本文の基準線を対応させる。 */
export default function GabledTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-gabled-tabs ${className}`}/>;}
