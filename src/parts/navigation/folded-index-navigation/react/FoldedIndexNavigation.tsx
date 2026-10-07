'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as FoldedIndexNavigationProps };
/** 折り返した見出しを並べる。 */
export default function FoldedIndexNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="folded-index-navigation" layout={props.layout ?? 'header'} />;
}
