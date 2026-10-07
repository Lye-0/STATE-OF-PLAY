'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as LetterheadNavigationProps };
/** レターヘッドの下に行先の署名欄を置く。 */
export default function LetterheadNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="letterhead-navigation" layout={props.layout ?? 'header'} />;
}
