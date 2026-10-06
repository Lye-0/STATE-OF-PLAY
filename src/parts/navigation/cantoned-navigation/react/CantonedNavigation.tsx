'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as CantonedNavigationProps };
/** 行き先の面を四角い角台で支え、選択した面の縁を揃える。 */
export default function CantonedNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="cantoned-navigation" layout={props.layout ?? 'header'} />;
}
