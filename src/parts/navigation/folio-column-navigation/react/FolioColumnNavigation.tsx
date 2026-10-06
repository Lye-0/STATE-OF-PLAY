'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as FolioColumnNavigationProps };
/** 行き先を章の列として置き、大きな現在地の文字を読みやすく保つ。 */
export default function FolioColumnNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="folio-column-navigation" layout={props.layout ?? 'header'} />;
}
