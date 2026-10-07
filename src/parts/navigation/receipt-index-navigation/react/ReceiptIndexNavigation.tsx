'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as ReceiptIndexNavigationProps };
/** 切り取り線で案内を区切る。 */
export default function ReceiptIndexNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="receipt-index-navigation" layout={props.layout ?? 'header'} />;
}
