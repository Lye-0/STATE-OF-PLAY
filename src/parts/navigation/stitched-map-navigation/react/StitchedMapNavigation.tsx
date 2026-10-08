'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as StitchedMapNavigationProps };
/** 縫い合わせた案内図。行先を布のラベルとして分け、選択したラベルの縫い目を強める。 */
export default function StitchedMapNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="stitched-map-navigation" layout={props.layout ?? 'header'} />;
}
