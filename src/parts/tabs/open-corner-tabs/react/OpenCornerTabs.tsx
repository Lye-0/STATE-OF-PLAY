'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 開いた四隅で本文面の位置を示す。 */
export default function OpenCornerTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-open-corner-tabs ${className}`}/>;}
