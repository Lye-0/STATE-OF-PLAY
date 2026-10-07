'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as OpenBracketNavigationProps };
/** 現在位置を括弧で示す。 */
export default function OpenBracketNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="open-bracket-navigation" layout={props.layout ?? 'header'} />;
}
