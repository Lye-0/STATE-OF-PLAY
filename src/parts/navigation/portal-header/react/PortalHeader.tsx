'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as PortalHeaderProps };
/** 閉じたヘッダーの内部から、大きな余白を持つ行き先の窓が開く。 */
export default function PortalHeader(props:NavigationProps) {
 return <NavigationView {...props} skin="portal-header" layout={props.layout ?? 'mobile'} />;
}
