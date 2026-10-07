'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as StitchedQuerySearchProps };
/** 布貼りの検索ノート。 */
export default function StitchedQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="stitched-query-search" />;
}
