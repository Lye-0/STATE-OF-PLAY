'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as SoftResourceSearchProps };
/** 資料を探す柔らかい検索面。 */
export default function SoftResourceSearch(props:SearchProps) {
 return <SearchView {...props} skin="soft-resource-search" />;
}
