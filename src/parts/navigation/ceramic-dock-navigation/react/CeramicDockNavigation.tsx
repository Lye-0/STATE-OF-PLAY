'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as CeramicDockNavigationProps };
/** 磁器のナビゲーション皿。行先を丸い小面に置き、選択した面の浅いくぼみを強調する。 */
export default function CeramicDockNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="ceramic-dock-navigation" layout={props.layout ?? 'header'} />;
}
