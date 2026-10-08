'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 操作卓の三つのモジュールから一つの情報窓を選ぶ。状態キーと画面の光を一致させる。 */
export default function StitchedFolioTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-stitched-folio-tabs ${className}`}/>;}
