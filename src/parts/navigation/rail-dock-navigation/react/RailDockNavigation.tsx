'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as RailDockNavigationProps };
/** ドックの二つの乗場で移動先を選ぶ。 */
export default function RailDockNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="rail-dock-navigation" layout={props.layout ?? 'header'} />;
}
