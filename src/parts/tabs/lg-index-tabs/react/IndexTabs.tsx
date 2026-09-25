'use client';
import React from 'react';
import {GlassTabsView,type GlassTabsProps} from '../../../../shared/liquid-glass/tabs-view';
import '../styles.css';
export type {GlassTabsProps,TabItem} from '../../../../shared/liquid-glass/tabs-view';
export default function IndexTabs({className='',...props}:GlassTabsProps){return <GlassTabsView material="regular" {...props} className={`sop-lg-index-tabs lg-quiet ${className}`}/>;}
