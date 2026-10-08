'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as BlueprintDockNavigationProps };
/** 図面の機能案内。ブランドと行先を格子に揃え、現在の領域を薄い青の面と濃い輪郭で示す。 */
export default function BlueprintDockNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="blueprint-dock-navigation" layout={props.layout ?? 'header'} />;
}
