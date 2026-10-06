'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 横から差し込む厚紙の索引が、選んだページの端を形成する。 */
export default function FoldedIndexTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-folded-index-tabs ${className}`}/>;}
