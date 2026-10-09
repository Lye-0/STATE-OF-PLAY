'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as OpenBracketNavigationProps };
/** 元の片側の開いた括弧と短い章罫、広い余白を保持し、ブランド・行先・現在地の密度を整える。細い3pxの括弧は増やさず、28pxのブランドと17pxの行先、全幅の狭い名称面を揃え、実選択は一つの淡い面と短い下罫へ集約する。 */
export default function OpenBracketNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="open-bracket-navigation" layout={props.layout ?? 'header'} />;
}
