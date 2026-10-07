'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as LedgerIndexNavigationProps };
/** 台帳の見出し行を現在地につなぐ。 */
export default function LedgerIndexNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="ledger-index-navigation" layout={props.layout ?? 'header'} />;
}
