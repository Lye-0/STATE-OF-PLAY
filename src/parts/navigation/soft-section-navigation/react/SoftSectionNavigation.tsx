'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as SoftSectionNavigationProps };
/** 柔らかな区画でページを分ける。 */
export default function SoftSectionNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="soft-section-navigation" layout={props.layout ?? 'header'} />;
}
