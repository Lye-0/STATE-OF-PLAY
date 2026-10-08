'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as ChapterSpineNavigationProps };
/** 章の背を持つナビゲーション。ブランドと章見出しを上下に分け、現在の章を小口の線で示す。 */
export default function ChapterSpineNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="chapter-spine-navigation" layout={props.layout ?? 'header'} />;
}
