'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RailMountedSearchProps };
/** レールに入力部と候補の停止点を揃える。 */
export default function RailMountedSearch(props:SearchProps) {
 return <SearchView {...props} skin="rail-mounted-search" />;
}
