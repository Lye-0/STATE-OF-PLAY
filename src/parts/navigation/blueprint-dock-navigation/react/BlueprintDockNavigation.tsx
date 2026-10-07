'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as BlueprintDockNavigationProps };
/** 設計図の区画を行き来する。 */
export default function BlueprintDockNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="blueprint-dock-navigation" layout={props.layout ?? 'header'} />;
}
