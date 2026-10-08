'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as CeramicQuerySearchProps };
/** 磁器の検索トレイ。入力は一つの浅い皿、分類は小さな丸い面、結果は平らな読み取り面にする。 */
export default function CeramicQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="ceramic-query-search" />;
}
