'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as RibbonHeaderProps };
/** 細い帯が選択した行き先の下を走り、端で柔らかく折り返す。 */
export default function RibbonHeader(props:NavigationProps) {
 return <NavigationView {...props} skin="ribbon-header" layout={props.layout ?? 'header'} />;
}
