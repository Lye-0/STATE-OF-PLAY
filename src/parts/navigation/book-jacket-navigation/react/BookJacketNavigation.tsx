'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as BookJacketNavigationProps };
/** ジャケットの背と見出しを使う。 */
export default function BookJacketNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="book-jacket-navigation" layout={props.layout ?? 'header'} />;
}
