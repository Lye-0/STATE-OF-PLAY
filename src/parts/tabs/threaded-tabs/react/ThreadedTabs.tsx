'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 糸のような二本の線で章を結び、選んだラベルだけを縫い留める。 */
export default function ThreadedTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-threaded-tabs ${className}`}/>;}
