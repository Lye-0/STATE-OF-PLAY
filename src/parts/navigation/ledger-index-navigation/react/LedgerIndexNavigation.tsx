'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as LedgerIndexNavigationProps };
/** 帳簿の索引列。リンクを罫線の同寸セルへ置き、ブランド・行先・現在地を三段に整える。 */
export default function LedgerIndexNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="ledger-index-navigation" layout={props.layout ?? 'header'} />;
}
