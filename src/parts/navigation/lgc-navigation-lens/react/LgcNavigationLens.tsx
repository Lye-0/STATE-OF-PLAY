'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as LgcNavigationLensProps };
/** 行き先が分かる、整理されたナビゲーション。リンクの標準操作を維持。 */
export default function LgcNavigationLens(props:NavigationProps) {
 return <NavigationView {...props} skin="lgc-navigation-lens" className={`lgc-root ${props.className??''}`} layout={props.layout ?? 'header'} />;
}
