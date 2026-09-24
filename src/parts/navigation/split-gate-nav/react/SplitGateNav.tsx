'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as SplitGateNavProps };
/** 右端のキーを開くと、二つの面が分かれてナビゲーションになる。 */
export default function SplitGateNav(props:NavigationProps) {
 return <NavigationView {...props} skin="split-gate-nav" layout={props.layout ?? 'mobile'} />;
}
