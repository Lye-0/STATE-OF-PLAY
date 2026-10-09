'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RibbonIndexSearchProps };
/** 実検索名を運ぶ帯が右に44pxの燕尾を残し、検索の紙の背を斜めに渡って実候補の左へ28pxの帯として降りる。候補の紙は帯から24px離し、下端を8pxの自由端へ揃える。帯の表・折返し・裏で厚みを分け、文字の面は透過や変形を使わず読める白紙として保つ。 */
export default function RibbonIndexSearch(props:SearchProps) {
 return <SearchView {...props} skin="ribbon-index-search" />;
}
