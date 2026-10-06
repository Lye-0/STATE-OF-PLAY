'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as SwitchplateNavigationProps };
/** 低い切替板のような行き先面と、離れた現在地欄を持つ。 */
export default function SwitchplateNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="switchplate-navigation" layout={props.layout ?? 'header'} />;
}
