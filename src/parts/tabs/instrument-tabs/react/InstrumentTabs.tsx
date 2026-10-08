'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 縫い綴じた布の見出しから同じ布の本文へ。選択帯の糸目と内側の余白を揃える。 */
export default function InstrumentTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-instrument-tabs ${className}`}/>;}
