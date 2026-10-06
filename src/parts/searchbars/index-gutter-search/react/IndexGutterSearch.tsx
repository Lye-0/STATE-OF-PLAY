'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as IndexGutterSearchProps };
/** 検索語を大きな横溝に置き、対象の切替を左の小さな索引へまとめる。 */
export default function IndexGutterSearch(props:SearchProps) {
 return <SearchView {...props} skin="index-gutter-search" />;
}
