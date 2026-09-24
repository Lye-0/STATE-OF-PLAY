'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as ContourNavigationProps };
/** 等高線のような接続線を背景に、経路の節点が現在地へ集まる。 */
export default function ContourNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="contour-navigation" layout={props.layout ?? 'sidebar'} />;
}
