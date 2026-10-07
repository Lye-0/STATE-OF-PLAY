'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as CeramicDockNavigationProps };
/** 磁器の二つの座に行先を収める。 */
export default function CeramicDockNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="ceramic-dock-navigation" layout={props.layout ?? 'header'} />;
}
