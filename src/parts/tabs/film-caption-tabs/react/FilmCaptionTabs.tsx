'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** フィルムの小さな送り穴と字幕。 */
export default function FilmCaptionTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-film-caption-tabs ${className}`}/>;}
