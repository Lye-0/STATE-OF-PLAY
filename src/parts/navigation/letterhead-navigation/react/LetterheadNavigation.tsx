'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as LetterheadNavigationProps };
/** レターヘッドの案内。大きめのブランド名と下の細いリンク列を分け、余白と下線で現在地を示す。 */
export default function LetterheadNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="letterhead-navigation" layout={props.layout ?? 'header'} />;
}
