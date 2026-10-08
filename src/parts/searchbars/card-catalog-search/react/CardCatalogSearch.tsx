'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as CardCatalogSearchProps };
/** 目録引き出しから資料を検索。入力を引き手の上へ置き、結果を整理票として下へ引き出す。 */
export default function CardCatalogSearch(props:SearchProps) {
 return <SearchView {...props} skin="card-catalog-search" />;
}
