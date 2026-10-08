'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as StoneDeskSearchProps };
/** 石の検索卓。明るい入力溝と独立した結果の段を使い、暗い大面積を避ける。 */
export default function StoneDeskSearch(props:SearchProps) {
 return <SearchView {...props} skin="stone-desk-search" />;
}
