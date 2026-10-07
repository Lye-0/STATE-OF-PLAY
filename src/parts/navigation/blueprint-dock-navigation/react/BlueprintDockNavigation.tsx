'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as BlueprintDockNavigationProps };
/** 図面の行先を二つの検査窓として配置。 */
export default function BlueprintDockNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="blueprint-dock-navigation" layout={props.layout ?? 'header'} />;
}
