'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as StitchedMapNavigationProps };
/** 地図の縫い目に沿う案内。 */
export default function StitchedMapNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="stitched-map-navigation" layout={props.layout ?? 'header'} />;
}
