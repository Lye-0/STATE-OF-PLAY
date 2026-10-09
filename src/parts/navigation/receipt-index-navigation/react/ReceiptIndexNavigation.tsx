'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as ReceiptIndexNavigationProps };
/** 実索引の一枚の紙が全幅64pxの曲面で手前に返り、実現在地の読み面へ連続する。細い側橋や離れた二つの票を廃し、全幅の湾曲と厚い返し口で紙の向きを読む。現在地は実itemから導出し、184pxの水平なnative読み面で全文をスクロールできる。モバイルでも同じ一枚の返しを使い、文字・リンク・押面は変形しない。 */
export default function ReceiptIndexNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="receipt-index-navigation" layout={props.layout ?? 'header'} currentPresentation={props.currentPresentation ?? 'return'} />;
}
