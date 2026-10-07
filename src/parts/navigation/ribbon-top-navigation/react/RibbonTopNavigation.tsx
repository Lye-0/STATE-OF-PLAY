'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as RibbonTopNavigationProps };
/** 上部の帯を行き先ごとに分ける。 */
export default function RibbonTopNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="ribbon-top-navigation" layout={props.layout ?? 'header'} />;
}
