'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RibbonIndexSearchProps };
/** 帯でつながる検索と結果の見出し。 */
export default function RibbonIndexSearch(props:SearchProps) {
 return <SearchView {...props} skin="ribbon-index-search" />;
}
