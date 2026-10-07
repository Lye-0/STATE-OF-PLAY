'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RibbonIndexSearchProps };
/** 検索語の下を索引の帯が通る。 */
export default function RibbonIndexSearch(props:SearchProps) {
 return <SearchView {...props} skin="ribbon-index-search" />;
}
