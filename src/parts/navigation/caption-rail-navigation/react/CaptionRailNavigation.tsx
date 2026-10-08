'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as CaptionRailNavigationProps };
/** 案内のキャプションレール。ブランドの見出し帯と行先列を分け、現在地は帯の端の印で確認。 */
export default function CaptionRailNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="caption-rail-navigation" layout={props.layout ?? 'header'} />;
}
