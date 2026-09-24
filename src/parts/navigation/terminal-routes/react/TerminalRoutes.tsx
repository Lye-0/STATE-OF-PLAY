'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as TerminalRoutesProps };
/** 階層のインデントと走査線で行き先を示す、落ち着いた端末。 */
export default function TerminalRoutes(props:NavigationProps) {
 return <NavigationView {...props} skin="terminal-routes" layout={props.layout ?? 'sidebar'} />;
}
