'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as LagoonSearchProps };
/** 水面の縁が入力に反応し、クリアな検索面から候補へ広がる。 */
export default function LagoonSearch(props:SearchProps) {
 return <SearchView {...props} skin="lagoon-search" />;
}
