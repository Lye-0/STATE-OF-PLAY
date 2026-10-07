'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 斜めの背を欄外に置き本文は水平に保つ。 */
export default function SlantedSpineTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-slanted-spine-tabs ${className}`}/>;}
