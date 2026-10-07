'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 紙面から浮く細長い栞。 */
export default function FloatingBookmarkTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-floating-bookmark-tabs ${className}`}/>;}
