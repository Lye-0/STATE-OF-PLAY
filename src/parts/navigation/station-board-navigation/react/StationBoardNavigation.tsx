'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as StationBoardNavigationProps };
/** 実際の行先を、連続した12pxの桁から40pxの支持で吊る別々の案内板へ編集する。紺の実ブランドと現在地、淡い行先板、選択した実行先の琥珀の小口で情報の役割を分ける。装飾の駅名・偽の番線を作らず、モバイルの実行先にも同じ吊り構造を続ける。 */
export default function StationBoardNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="station-board-navigation" layout={props.layout ?? 'header'} />;
}
