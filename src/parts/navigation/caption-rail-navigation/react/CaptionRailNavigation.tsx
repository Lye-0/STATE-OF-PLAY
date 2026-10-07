'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as CaptionRailNavigationProps };
/** 短い見出しと細い現在地線。 */
export default function CaptionRailNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="caption-rail-navigation" layout={props.layout ?? 'header'} />;
}
