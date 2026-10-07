'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as WarmLibrarySearchProps };
/** 資料一覧に合う穏やかな検索欄。 */
export default function WarmLibrarySearch(props:SearchProps) {
 return <SearchView {...props} skin="warm-library-search" />;
}
