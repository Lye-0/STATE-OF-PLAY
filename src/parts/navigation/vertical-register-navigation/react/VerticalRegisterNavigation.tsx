'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as VerticalRegisterNavigationProps };
/** 細い登録帯の右に行き先を並べ、現在地を番号札のように示す。 */
export default function VerticalRegisterNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="vertical-register-navigation" layout={props.layout ?? 'header'} />;
}
