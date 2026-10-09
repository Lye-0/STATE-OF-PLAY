'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as ClearLineNavigationProps };
/** コンパクトな側線と短い説明で移動先を読むナビゲーション。44px以上の操作を保ち、区切りと現在地を細い罫に揃える。 */
export default function ClearLineNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="clear-line-navigation" layout={props.layout ?? 'header'} />;
}
