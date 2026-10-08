'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as OpenBracketNavigationProps };
/** 角括弧の中の行先案内。面の重なりを減らし、ブランドと現在のリンクを文字と短い線で強調。 */
export default function OpenBracketNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="open-bracket-navigation" layout={props.layout ?? 'header'} />;
}
