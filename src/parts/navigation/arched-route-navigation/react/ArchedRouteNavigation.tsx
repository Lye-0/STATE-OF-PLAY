'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as ArchedRouteNavigationProps };
/** 上端の丸い行き先窓を、低い水平線でつなげる。 */
export default function ArchedRouteNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="arched-route-navigation" layout={props.layout ?? 'header'} />;
}
