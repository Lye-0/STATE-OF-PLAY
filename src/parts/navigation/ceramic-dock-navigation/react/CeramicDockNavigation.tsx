'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as CeramicDockNavigationProps };
/** 丸みのある器に案内を収める。 */
export default function CeramicDockNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="ceramic-dock-navigation" layout={props.layout ?? 'header'} />;
}
