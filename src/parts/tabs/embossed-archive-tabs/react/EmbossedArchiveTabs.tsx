'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** エンボスされた金属の小窓。 */
export default function EmbossedArchiveTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-embossed-archive-tabs ${className}`}/>;}
