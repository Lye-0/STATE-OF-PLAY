'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 三つの票券で選ぶ資料。選択票は切り取り線の中に収まり、本文は続く一枚の伝票にする。 */
export default function FilmCaptionTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-film-caption-tabs ${className}`}/>;}
