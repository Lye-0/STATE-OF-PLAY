'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as ClearLineNavigationProps };
/** 罫線を主体にした明快な案内。 */
export default function ClearLineNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="clear-line-navigation" layout={props.layout ?? 'header'} />;
}
