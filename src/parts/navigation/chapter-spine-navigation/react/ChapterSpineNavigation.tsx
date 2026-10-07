'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as ChapterSpineNavigationProps };
/** 本の章を縦の背に沿って選ぶ。 */
export default function ChapterSpineNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="chapter-spine-navigation" layout={props.layout ?? 'header'} />;
}
