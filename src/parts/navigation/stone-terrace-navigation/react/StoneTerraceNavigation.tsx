'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as StoneTerraceNavigationProps };
/** 低い石段の上に行き先を置く。 */
export default function StoneTerraceNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="stone-terrace-navigation" layout={props.layout ?? 'header'} />;
}
