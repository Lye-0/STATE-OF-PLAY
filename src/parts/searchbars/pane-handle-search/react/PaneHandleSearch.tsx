'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as PaneHandleSearchProps };
/** 引き出せる窓の取手を右端へ置き、検索の入力面を広く保つ。 */
export default function PaneHandleSearch(props:SearchProps) {
 return <SearchView {...props} skin="pane-handle-search" />;
}
