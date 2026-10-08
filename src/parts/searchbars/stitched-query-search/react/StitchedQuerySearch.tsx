'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as StitchedQuerySearchProps };
/** 縫い付ける検索ラベル。入力と分類を同じ布の上へ置き、結果は個別の資料札にする。 */
export default function StitchedQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="stitched-query-search" />;
}
