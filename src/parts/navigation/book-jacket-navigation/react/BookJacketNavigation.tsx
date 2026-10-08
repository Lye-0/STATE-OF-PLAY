'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as BookJacketNavigationProps };
/** 本のジャケットを開く案内。左の背と明るい中面を分け、現在の章を短い栞の下線で示す。 */
export default function BookJacketNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="book-jacket-navigation" layout={props.layout ?? 'header'} />;
}
