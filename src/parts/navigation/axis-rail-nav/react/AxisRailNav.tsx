'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as AxisRailNavProps };
/** 一本の軸と小さな節点が、選択した場所へ伸び縮みする。 */
export default function AxisRailNav(props:NavigationProps) {
 return <NavigationView {...props} skin="axis-rail-nav" layout={props.layout ?? 'sidebar'} />;
}
