'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as CeramicDockNavigationProps };
/** 釉薬のプレートを陶の支柱へ接続したナビゲーション。丸い受けと短い腕で各行先を独立して支え、題字の上蓋と現在地の台座で縦のドックをまとめる。 */
export default function CeramicDockNavigation(props:NavigationProps) {
 return <NavigationView groupPresentation="inline" {...props} skin="ceramic-dock-navigation" layout={props.layout ?? 'header'} />;
}
