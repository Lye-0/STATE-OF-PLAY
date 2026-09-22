'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 切符のミシン目と印字。レトロな乗車票のタブ。 */
export default function TicketTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-ticket-tabs ${className}`}/>;}
