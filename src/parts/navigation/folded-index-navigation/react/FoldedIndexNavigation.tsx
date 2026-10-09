'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as FoldedIndexNavigationProps };
/** 実groupの操作だけが48pxの広い折目を開き、実子行先の紙が親disclosureの流れの中へ下りる。通常リンクへ偽の折片を付けず、一体の実親面と実子面が接合する。モバイルのnative detailsにも同じ広い折目を続け、親と子の情報が主外形を変える。 */
export default function FoldedIndexNavigation(props:NavigationProps) {
 return <NavigationView {...props} groupPresentation={props.groupPresentation??'inline'} skin="folded-index-navigation" layout={props.layout ?? 'header'} />;
}
