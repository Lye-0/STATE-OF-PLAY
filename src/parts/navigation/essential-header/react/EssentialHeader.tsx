'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as EssentialHeaderProps };
/** 行き先が分かる、整理されたナビゲーション。リンクの標準操作を維持。 */
export default function EssentialHeader(props:NavigationProps) {
 return <NavigationView {...props} skin="essential-header" layout={props.layout ?? 'header'} />;
}
