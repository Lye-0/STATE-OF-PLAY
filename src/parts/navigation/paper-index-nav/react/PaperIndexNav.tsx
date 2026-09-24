'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as PaperIndexNavProps };
/** 紙のインデックスをめくりながら、章と場所を選ぶサイドナビ。 */
export default function PaperIndexNav(props:NavigationProps) {
 return <NavigationView {...props} skin="paper-index-nav" layout={props.layout ?? 'sidebar'} />;
}
