'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as WarmLibrarySearchProps };
/** 書名のように見出しを読む資料検索。明朝の名称、説明、補足コードを背の細線に沿わせ、読み物を選ぶ順序に整える。 */
export default function WarmLibrarySearch(props:SearchProps) {
 return <SearchView {...props} skin="warm-library-search" />;
}
