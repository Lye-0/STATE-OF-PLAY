'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 緑のインジケーターと音響機器のキー。物理的な切り替え感。 */
export default function StudioTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-studio-tabs ${className}`}/>;}
