'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as CompactToolSearchProps };
/** ツールバー向けの小さな検索欄。 */
export default function CompactToolSearch(props:SearchProps) {
 return <SearchView {...props} skin="compact-tool-search" />;
}
