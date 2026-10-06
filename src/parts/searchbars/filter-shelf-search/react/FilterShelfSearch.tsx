'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as FilterShelfSearchProps };
/** 入力面の下に小さな検索対象の札を載せ、現在の範囲を識別する。 */
export default function FilterShelfSearch(props:SearchProps) {
 return <SearchView {...props} skin="filter-shelf-search" />;
}
