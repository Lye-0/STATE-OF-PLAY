'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as ScoredRouteNavigationProps };
/** 太い外縁を使わず、行き先の区画を細い切込みと下線で分ける。 */
export default function ScoredRouteNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="scored-route-navigation" layout={props.layout ?? 'header'} />;
}
