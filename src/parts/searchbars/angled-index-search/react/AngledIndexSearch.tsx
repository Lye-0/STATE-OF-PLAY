'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as AngledIndexSearchProps };
/** 斜めの縁で検索の入口を区切り、内容と候補は水平に保つ。 */
export default function AngledIndexSearch(props:SearchProps) {
 return <SearchView {...props} skin="angled-index-search" />;
}
