'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as ChapterSpineNavigationProps };
/** 左柱と三つの別板を廃し、大きい横向きの開いた製本小口と一枚の実索引へ組み直す。実行先を個別カードにせず一枚の本文へ読み、その下端が実現在地の幅広い前小口へ24px入る。ブランドの後小口と現在地の前小口が非対称な一冊の断面を作り、狭幅も一続きの本の輪郭を持つ。 */
export default function ChapterSpineNavigation(props:NavigationProps) {
 return <NavigationView {...props} skin="chapter-spine-navigation" layout={props.layout ?? 'header'} />;
}
