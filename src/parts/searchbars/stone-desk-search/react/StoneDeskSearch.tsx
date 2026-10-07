'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as StoneDeskSearchProps };
/** 石の作業台の窪みを検索面にする。 */
export default function StoneDeskSearch(props:SearchProps) {
 return <SearchView {...props} skin="stone-desk-search" />;
}
