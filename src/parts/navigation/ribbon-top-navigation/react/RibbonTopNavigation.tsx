'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as RibbonTopNavigationProps };
/** 実ブランドの帯と実現在名の返端を、上部の一つの大きい非対称な交差接合へ集める。ブランド端の80pxの帯が現在名の16pxの長い切口の裏へ入り、現在面だけ24px下へずれて前後を見せる。上下の帯で一覧を囲わず、行先は接合の下の独立した一枚の読む面に置く。 */
export default function RibbonTopNavigation(props:NavigationProps) {
 return <NavigationView currentPresentation="crossing" {...props} skin="ribbon-top-navigation" layout={props.layout ?? 'header'} />;
}
