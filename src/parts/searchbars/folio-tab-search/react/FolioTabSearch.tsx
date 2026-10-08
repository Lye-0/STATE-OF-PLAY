'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as FolioTabSearchProps };
/** 本の中から探す索引。左の背と上の分類タブを使い、結果の見出しを小口の罫へ揃える。 */
export default function FolioTabSearch(props:SearchProps) {
 return <SearchView {...props} skin="folio-tab-search" />;
}
