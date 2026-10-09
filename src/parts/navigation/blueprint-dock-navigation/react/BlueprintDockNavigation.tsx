'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as BlueprintDockNavigationProps };
/** 実索引を左右の開いた厚い直角治具へ載せ、実現在地は一本の幅40pxの送りへ接合する。四周の図面枠と飾りの測定目盛りは作らず、左右の80pxの治具と下の独立した実現在地が三点の支えとなる。文字とnative操作は不透明な一枚の図面上へ固定する。 */
export default function BlueprintDockNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="blueprint-dock-navigation" layout={props.layout ?? 'header'} />;
}
