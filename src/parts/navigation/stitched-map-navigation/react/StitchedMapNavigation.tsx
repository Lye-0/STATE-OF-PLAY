'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as StitchedMapNavigationProps };
/** 交互カードと浮いたXを廃し、一枚の布の実groupの開口へ折り伏せ縫いを集約する。実親の上辺と子の読む面の両端32pxに深い孔を設け、その孔を通る幅6pxの糸で折った耳を留める。直リンクには孔や別布を反復せず、開いた実階層だけの切れ目を見せる。 */
export default function StitchedMapNavigation(props:NavigationProps) {
 return <NavigationView groupPresentation="inline" {...props} skin="stitched-map-navigation" layout={props.layout ?? 'header'} />;
}
