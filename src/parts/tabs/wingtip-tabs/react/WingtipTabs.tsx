'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 左右の翼端をもつ見出しが、開いているページに折り返す。 */
export default function WingtipTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-wingtip-tabs ${className}`}/>;}
