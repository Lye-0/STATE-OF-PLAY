'use client';
import React,{useRef} from 'react';
import {TabsView,type TabsProps} from '../tabs-view';
import type {GlassOptions} from './core';
import {useGlass} from './use-glass';
export type GlassTabsProps=TabsProps&GlassOptions;
export type {TabItem} from '../tabs-view';
export function GlassTabsView({material='clear',appearance='auto',optics='standard',paused=false,className='',...props}:GlassTabsProps){
 const root=useRef<HTMLDivElement|null>(null);useGlass(root,{material,appearance,optics,paused});
 return <TabsView {...props} rootRef={root} className={`lg-root lg-tabs ${className}`} data-lg-material={material} data-lg-appearance={appearance}/>;
}
