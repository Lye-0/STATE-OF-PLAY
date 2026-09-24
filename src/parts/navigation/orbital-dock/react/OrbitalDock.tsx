'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as OrbitalDockProps };
/** 選択したアイコンの周囲に軌道が集まり、次の行き先へ運ぶ。 */
export default function OrbitalDock(props:NavigationProps) {
 return <NavigationView {...props} skin="orbital-dock" layout={props.layout ?? 'dock'} />;
}
