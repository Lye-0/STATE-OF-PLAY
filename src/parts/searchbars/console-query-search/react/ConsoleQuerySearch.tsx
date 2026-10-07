'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as ConsoleQuerySearchProps };
/** 操作盤の照合窓を使う検索。 */
export default function ConsoleQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="console-query-search" />;
}
