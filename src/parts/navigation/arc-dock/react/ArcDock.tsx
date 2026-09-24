'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as ArcDockProps };
/** 浮いたドックを一枚の選択面が横断し、現在の行き先へ収まる。 */
export default function ArcDock(props:NavigationProps) {
 return <NavigationView {...props} skin="arc-dock" layout={props.layout ?? 'dock'} />;
}
