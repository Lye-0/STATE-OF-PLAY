'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as SpineNavigationProps };
/** 縦の背と折り返した章見出し。選択した場所が紙の一段として浮く。 */
export default function SpineNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="spine-navigation" layout={props.layout ?? 'sidebar'} />;
}
