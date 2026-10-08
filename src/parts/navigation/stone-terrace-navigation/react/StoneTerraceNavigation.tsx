'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as StoneTerraceNavigationProps };
/** 低いテラスの案内。ブランドと行先の面を浅い段に分け、現在の行先だけ明るい区画へ載せる。 */
export default function StoneTerraceNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="stone-terrace-navigation" layout={props.layout ?? 'header'} />;
}
