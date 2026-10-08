'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 大きい番号を持つ編集誌面の三部構成。選択番号と余白でページの階層を表す。 */
export default function SlantedSpineTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-slanted-spine-tabs ${className}`}/>;}
