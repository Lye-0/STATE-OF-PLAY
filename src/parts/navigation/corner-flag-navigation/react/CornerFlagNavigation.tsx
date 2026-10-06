'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as CornerFlagNavigationProps };
/** 小さな角旗をもつ行き先面が、現在の選択を右端で示す。 */
export default function CornerFlagNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="corner-flag-navigation" layout={props.layout ?? 'header'} />;
}
