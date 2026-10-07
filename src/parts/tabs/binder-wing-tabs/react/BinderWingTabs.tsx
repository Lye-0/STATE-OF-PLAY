'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 背と開いたページを連続させる綴じ構造。 */
export default function BinderWingTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-binder-wing-tabs ${className}`}/>;}
