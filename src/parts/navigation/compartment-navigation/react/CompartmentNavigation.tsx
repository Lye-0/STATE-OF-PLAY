'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as CompartmentNavigationProps };
/** 行き先を対等な小区画へ並べ、現在地の面だけを前に出す。 */
export default function CompartmentNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="compartment-navigation" layout={props.layout ?? 'header'} />;
}
