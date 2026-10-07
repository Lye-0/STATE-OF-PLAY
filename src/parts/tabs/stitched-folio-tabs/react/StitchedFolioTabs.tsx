'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 布貼りの縫い目で見出しをつなぐ。 */
export default function StitchedFolioTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-stitched-folio-tabs ${className}`}/>;}
