'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as MosaicNavigationProps };
/** 行き先を小さな面として並べ、選択したタイルに光が流れ込む。 */
export default function MosaicNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="mosaic-navigation" layout={props.layout ?? 'header'} />;
}
