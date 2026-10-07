'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as StitchedMapNavigationProps };
/** 縫い目の経路をたどって行先を読む。 */
export default function StitchedMapNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="stitched-map-navigation" layout={props.layout ?? 'header'} />;
}
