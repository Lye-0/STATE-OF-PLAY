'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as CompactToolNavigationProps };
/** ツール画面向けの小さな案内。 */
export default function CompactToolNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="compact-tool-navigation" layout={props.layout ?? 'header'} />;
}
