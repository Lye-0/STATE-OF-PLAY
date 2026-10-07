'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 段違いの二本のレールを本文のガイドに使う。 */
export default function OffsetRailTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-offset-rail-tabs ${className}`}/>;}
