'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as BookJacketNavigationProps };
/** 書籍の外周を全廃し、実group親の一枚の見出し面の内側へ子の読む紙が差し込まれる。斜めの切口の40pxの前唇が子の紙を8px覆い、親の内面に子が入る前後関係を作る。直リンクは一枚の本文に保ち、実階層がない行へジャケットを付けない。 */
export default function BookJacketNavigation(props:NavigationProps) {
 return <NavigationView groupPresentation="inline" {...props} skin="book-jacket-navigation" layout={props.layout ?? 'header'} />;
}
