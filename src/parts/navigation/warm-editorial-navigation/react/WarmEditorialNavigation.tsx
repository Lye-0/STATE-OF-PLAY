'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as WarmEditorialNavigationProps };
/** 章番号と見出しで読む編集目次。アイコンの代わりに実項目の連番を置き、短い説明と章の順序で移動先を選ぶ。 */
export default function WarmEditorialNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="warm-editorial-navigation" layout={props.layout ?? 'header'} />;
}
