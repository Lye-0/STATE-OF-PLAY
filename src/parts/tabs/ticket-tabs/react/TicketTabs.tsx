'use client';
import React from 'react';
import {type TabsProps} from '../../../../shared/tabs-view';
import {TransitTabsView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 切符のミシン目と印字。レトロな乗車票のタブ。 */
export default function TicketTabs({className='',...props}:TabsProps){return <TransitTabsView mode="ticket" {...props} className={`sop-ticket-tabs ${className}`}/>;}
