'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 布の見出しと紙の本文を素材の境で切り替える。 */
export default function StitchedFolioTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-stitched-folio-tabs ${className}`}/>;}
