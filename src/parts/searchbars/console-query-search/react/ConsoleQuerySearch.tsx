'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as ConsoleQuerySearchProps };
/** 検索条件を図面の欄へ記入。対象分類を格子の列へ揃え、結果は罫線を共有する一覧にする。 */
export default function ConsoleQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="console-query-search" />;
}
