'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as CeramicQuerySearchProps };
/** 陶器の器を思わせる検索面。 */
export default function CeramicQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="ceramic-query-search" />;
}
