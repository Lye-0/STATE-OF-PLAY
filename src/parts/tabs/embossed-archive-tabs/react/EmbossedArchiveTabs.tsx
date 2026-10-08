'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 一本の帯を三つの章へ通す。選択札を帯の下へ留め、本文面へ折り返しを続ける。 */
export default function EmbossedArchiveTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-embossed-archive-tabs ${className}`}/>;}
