'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as PlainWorkspaceNavigationProps };
/** 汎用的な作業画面の案内。 */
export default function PlainWorkspaceNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="plain-workspace-navigation" layout={props.layout ?? 'header'} />;
}
