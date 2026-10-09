'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as StoneTerraceNavigationProps };
/** 一つの採掘面へ上の112pxの切欠き、右下の56pxの凹み、左下の64pxの欠けを作り、不均一な断面を露出させる。実ブランド・行先・現在地の文字とnative hitを切欠きの外へ保ち、選択を平面の8pxの深さだけで表す。狭幅と実モバイル欄にも別板を足さず同じ採掘面を続ける。 */
export default function StoneTerraceNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="stone-terrace-navigation" layout={props.layout ?? 'header'} />;
}
