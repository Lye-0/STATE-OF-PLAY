'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as ReceiptIndexNavigationProps };
/** 受領票の行を移動先の索引にする。 */
export default function ReceiptIndexNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="receipt-index-navigation" layout={props.layout ?? 'header'} />;
}
