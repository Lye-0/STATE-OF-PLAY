'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as CaptionRailNavigationProps };
/** 字幕の見出しから行先を水平罫へつなぐ。 */
export default function CaptionRailNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="caption-rail-navigation" layout={props.layout ?? 'header'} />;
}
