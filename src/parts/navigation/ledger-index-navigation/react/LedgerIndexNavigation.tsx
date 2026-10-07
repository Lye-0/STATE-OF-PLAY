'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as LedgerIndexNavigationProps };
/** 台帳の罫線で行き先を区切る。 */
export default function LedgerIndexNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="ledger-index-navigation" layout={props.layout ?? 'header'} />;
}
