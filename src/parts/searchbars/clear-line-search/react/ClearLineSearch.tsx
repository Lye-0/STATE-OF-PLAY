'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as ClearLineSearchProps };
/** 輪郭と余白で検索位置を示す。 */
export default function ClearLineSearch(props:SearchProps) {
 return <SearchView {...props} skin="clear-line-search" />;
}
