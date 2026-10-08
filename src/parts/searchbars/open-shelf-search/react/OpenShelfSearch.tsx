'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as OpenShelfSearchProps };
/** 余白を使う検索欄。外箱を外して大きな検索文字と明確な実行ボタンを置き、結果を本文として並べる。 */
export default function OpenShelfSearch(props:SearchProps) {
 return <SearchView {...props} skin="open-shelf-search" />;
}
