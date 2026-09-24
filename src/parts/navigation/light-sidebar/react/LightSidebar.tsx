'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as LightSidebarProps };
/** 行き先が分かる、整理されたナビゲーション。リンクの標準操作を維持。 */
export default function LightSidebar(props:NavigationProps) {
 return <NavigationView {...props} skin="light-sidebar" layout={props.layout ?? 'sidebar'} />;
}
