'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as CaptionRailNavigationProps };
/** 一覧の二つの実行先と次の実行先の間に、現在名を読む固定の大きい貫通窓を開く。前の索引面と後の現在面は左上48px・右下72pxの実残し材で接合し、24pxの空隙は背景まで抜く。現在地更新は実文字だけを替え、全行のnative hitと文字の位置を保つ。 */
export default function CaptionRailNavigation(props:NavigationProps) {
 return <NavigationView currentPresentation="window" {...props} skin="caption-rail-navigation" layout={props.layout ?? 'header'} />;
}
