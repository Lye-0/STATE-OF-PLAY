'use client';
import React from 'react';
import {type TabsProps} from '../../../../shared/tabs-view';
import {TransitTabsView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** ガラスの向こうのオーロラが、次の内容へなめらかに滑る。 */
export default function AuroraTabs({className='',...props}:TabsProps){return <TransitTabsView mode="fluid" {...props} className={`sop-aurora-tabs ${className}`}/>;}
