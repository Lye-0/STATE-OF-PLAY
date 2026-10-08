'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as RibbonTopNavigationProps };
/** 帯状の上部ナビゲーション。行先を一枚の帯へ揃え、現在の項目の下端だけを濃くする。 */
export default function RibbonTopNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="ribbon-top-navigation" layout={props.layout ?? 'header'} />;
}
