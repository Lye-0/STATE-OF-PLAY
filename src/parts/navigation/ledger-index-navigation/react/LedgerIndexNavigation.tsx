'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as LedgerIndexNavigationProps };
/** 全行のnative読む面に同じ索引切口を予約し、実現在名の抜き出した紙だけが48pxの舌を通って実選択位置に現れる。選択しても全行の文字とhitの寸法を変えない。現在地なしでは紙と舌を置かず、モバイルは実現在名をブランドの下の同じ切口から出す。 */
export default function LedgerIndexNavigation(props:NavigationProps) {
 return <NavigationView currentPresentation="inline" {...props} skin="ledger-index-navigation" layout={props.layout ?? 'header'} />;
}
