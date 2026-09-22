'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 余白と細い下線で、選択と内容の関係を伝える。 */
export default function UnderlineTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-underline-tabs ${className}`}/>;}
