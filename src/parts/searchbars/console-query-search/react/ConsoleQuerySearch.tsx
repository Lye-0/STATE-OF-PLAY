'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as ConsoleQuerySearchProps };
/** コンソールの入力窓と測定結果を分離。 */
export default function ConsoleQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="console-query-search" />;
}
