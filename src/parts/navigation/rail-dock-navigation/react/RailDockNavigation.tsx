'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as RailDockNavigationProps };
/** 実親の操作床から左右に分かれた厚い金属断面が、開いた中央空隙を残して実子の床へ16px入る。縦柱と各行の棚を全廃し、二股の分岐は実groupが開いた接点だけに現れる。直リンクは同じ平面、親子の文字とnative hitはその床へ固定する。 */
export default function RailDockNavigation(props:NavigationProps) {
 return <NavigationView groupPresentation="inline" {...props} skin="rail-dock-navigation" layout={props.layout ?? 'header'} />;
}
