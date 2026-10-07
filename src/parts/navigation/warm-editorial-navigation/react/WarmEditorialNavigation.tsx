'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as WarmEditorialNavigationProps };
/** 文章中心のサイト向けの案内。 */
export default function WarmEditorialNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="warm-editorial-navigation" layout={props.layout ?? 'header'} />;
}
