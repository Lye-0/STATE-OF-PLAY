'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as LetterheadNavigationProps };
/** 元の題字と二列の見出し、細い章罫を保持し、狭幅の実ブランドを操作と別段へ分けて全文の読み幅を確保する。30pxの題字、17pxの行先、14pxの説明を安定した余白へ揃え、現在地は一つの下罫だけで示す。 */
export default function LetterheadNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="letterhead-navigation" layout={props.layout ?? 'header'} />;
}
