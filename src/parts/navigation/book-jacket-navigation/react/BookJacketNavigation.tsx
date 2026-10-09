'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as BookJacketNavigationProps };
/** 題字を読むカバー面と目次を読む本文面を見開きにしたナビゲーション。背の綴じから左右の紙を分け、展開先は折返しの内側に挟んだ別紙へ接続する。 */
export default function BookJacketNavigation(props:NavigationProps) {
 return <NavigationView groupPresentation="inline" {...props} skin="book-jacket-navigation" layout={props.layout ?? 'header'} />;
}
