'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as LetterpressQuerySearchProps };
/** 活版の見出しと短い検索罫。 */
export default function LetterpressQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="letterpress-query-search" />;
}
