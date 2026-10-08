'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as FoldedQuerySearchProps };
/** 折り返す検索ノート。検索条件を上の折り面へ、結果を下の平らな紙面へ開く。 */
export default function FoldedQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="folded-query-search" />;
}
