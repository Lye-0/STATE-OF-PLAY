'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as CeramicQuerySearchProps };
/** 磁器の入力面と水平な候補の皿。 */
export default function CeramicQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="ceramic-query-search" />;
}
