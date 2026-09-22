'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** ガラスの向こうのオーロラが、次の内容へなめらかに滑る。 */
export default function AuroraTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-aurora-tabs ${className}`}/>;}
