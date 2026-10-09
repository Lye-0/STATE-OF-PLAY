'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as LetterheadNavigationProps };
/** 題字・現在地の余白欄・番号付き目次を別々に組む便箋ナビゲーション。通常幅は左の現在地欄と右の行先本文を並べ、狭幅では題字の下に同じ順序で接続する。 */
export default function LetterheadNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="letterhead-navigation" layout={props.layout ?? 'header'} />;
}
