'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as StoneTerraceNavigationProps };
/** 石の段の二列に行先を等しく置く。 */
export default function StoneTerraceNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="stone-terrace-navigation" layout={props.layout ?? 'header'} />;
}
