'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RibbonIndexSearchProps };
/** 検索と分類を一本の帯にまとめる。入力の下へ分類の短冊を並べ、結果には余白を確保する。 */
export default function RibbonIndexSearch(props:SearchProps) {
 return <SearchView {...props} skin="ribbon-index-search" />;
}
