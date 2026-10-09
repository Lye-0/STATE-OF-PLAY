'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as OpenBracketNavigationProps };
/** 行先ごとの読み取り面を左右の括弧で独立して支えるナビゲーション。面と面の間は背景へ抜け、少しずらした支持面の連なりから現在地と行先を追える。 */
export default function OpenBracketNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="open-bracket-navigation" layout={props.layout ?? 'header'} />;
}
