'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as FoldedIndexNavigationProps };
/** 折った索引を縦に開いて行先を読む。 */
export default function FoldedIndexNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="folded-index-navigation" layout={props.layout ?? 'header'} />;
}
