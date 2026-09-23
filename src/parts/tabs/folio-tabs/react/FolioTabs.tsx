'use client';
import React from 'react';
import {type TabsProps} from '../../../../shared/tabs-view';
import {TransitTabsView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 重なる紙と見出しの綴じ目。本文までつながる紙のタブ。 */
export default function FolioTabs({className='',...props}:TabsProps){return <TransitTabsView mode="paper" {...props} className={`sop-folio-tabs ${className}`}/>;}
