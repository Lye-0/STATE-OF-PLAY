'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 刻まれた番号と切り欠いた指標。コンテンツを旅する索引。 */
export default function AtlasTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-atlas-tabs ${className}`}/>;}
