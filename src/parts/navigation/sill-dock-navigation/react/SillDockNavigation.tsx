'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as SillDockNavigationProps };
/** 細い台の上に行き先の札を置き、現在地だけを下へ接続する。 */
export default function SillDockNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="sill-dock-navigation" layout={props.layout ?? 'header'} />;
}
