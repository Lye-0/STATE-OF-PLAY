'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as ReceiptIndexNavigationProps };
/** 受付票の索引。ブランド、行先、現在地の三段をミシン目で分け、選択位置を押印の枠で示す。 */
export default function ReceiptIndexNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="receipt-index-navigation" layout={props.layout ?? 'header'} />;
}
