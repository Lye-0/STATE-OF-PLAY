'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 計器の窓と照準線で選択を読む。 */
export default function InstrumentTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-instrument-tabs ${className}`}/>;}
