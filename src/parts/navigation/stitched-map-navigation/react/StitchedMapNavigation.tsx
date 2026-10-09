'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as StitchedMapNavigationProps };
/** 縫い目が行先をつなぐナビゲーション。現在地の布片と開いた小さな地図を同じ細い綴じ線へ接続し、大きな無地の面を減らす。 */
export default function StitchedMapNavigation(props:NavigationProps) {
 return <NavigationView groupPresentation="inline" {...props} skin="stitched-map-navigation" layout={props.layout ?? 'header'} />;
}
