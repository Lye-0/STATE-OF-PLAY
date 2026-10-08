'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as FoldedIndexNavigationProps };
/** 折り畳んだ索引。リンクの折り返しを下辺に揃え、開いたメニューにも同じ平らな見出しを用いる。 */
export default function FoldedIndexNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="folded-index-navigation" layout={props.layout ?? 'header'} />;
}
