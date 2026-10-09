'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as SoftSectionNavigationProps };
/** 説明付きの区画を選ぶナビゲーション。行先ごとに小さな読み取り面を設け、名前・説明・現在地を続けて確認できる。 */
export default function SoftSectionNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="soft-section-navigation" layout={props.layout ?? 'header'} />;
}
