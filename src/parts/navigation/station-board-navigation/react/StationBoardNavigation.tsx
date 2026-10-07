'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as StationBoardNavigationProps };
/** 駅の案内板のような区画と現在地。 */
export default function StationBoardNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="station-board-navigation" layout={props.layout ?? 'header'} />;
}
