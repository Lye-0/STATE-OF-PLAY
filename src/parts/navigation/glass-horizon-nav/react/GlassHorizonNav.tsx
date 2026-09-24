'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as GlassHorizonNavProps };
/** 透明な選択面が水平線を滑り、ガラスの縁に光が集まる。 */
export default function GlassHorizonNav(props:NavigationProps) {
 return <NavigationView {...props} skin="glass-horizon-nav" layout={props.layout ?? 'header'} />;
}
