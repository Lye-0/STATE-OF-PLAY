'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as FoldedQuerySearchProps };
/** 折り返した検索票と本文リストを連続させる。 */
export default function FoldedQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="folded-query-search" />;
}
