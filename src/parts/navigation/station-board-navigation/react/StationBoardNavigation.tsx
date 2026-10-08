'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as StationBoardNavigationProps };
/** 駅の案内板。ブランドを上の路線名、リンクを同じ大きさの行先札として組み、現在位置を下線で明示。 */
export default function StationBoardNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="station-board-navigation" layout={props.layout ?? 'header'} />;
}
