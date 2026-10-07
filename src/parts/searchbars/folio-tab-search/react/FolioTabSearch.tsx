'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as FolioTabSearchProps };
/** 冊子の索引を検索条件と結果へつなぐ。 */
export default function FolioTabSearch(props:SearchProps) {
 return <SearchView {...props} skin="folio-tab-search" />;
}
