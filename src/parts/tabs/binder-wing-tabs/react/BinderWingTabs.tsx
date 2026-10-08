'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 綴じた三枚の章扉。選択タブが本文面と同じ紙になり、未選択は背表紙側へ残る。 */
export default function BinderWingTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-binder-wing-tabs ${className}`}/>;}
