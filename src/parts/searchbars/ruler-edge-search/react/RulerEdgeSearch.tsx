'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RulerEdgeSearchProps };
/** 入力の上辺に細い目盛りを置き、検索結果をその下の資料面へ続ける。 */
export default function RulerEdgeSearch(props:SearchProps) {
 return <SearchView {...props} skin="ruler-edge-search" />;
}
