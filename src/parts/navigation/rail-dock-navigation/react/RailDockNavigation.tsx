'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as RailDockNavigationProps };
/** 行先を載せるドック。リンクを支える下のレールと現在地の小さな台座を使い、文字位置を固定する。 */
export default function RailDockNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="rail-dock-navigation" layout={props.layout ?? 'header'} />;
}
