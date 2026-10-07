'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RailMountedSearchProps };
/** レールに取り付けた検索面。 */
export default function RailMountedSearch(props:SearchProps) {
 return <SearchView {...props} skin="rail-mounted-search" />;
}
