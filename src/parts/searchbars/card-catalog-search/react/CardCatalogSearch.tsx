'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as CardCatalogSearchProps };
/** 目録の索引と結果票を二段に分ける。 */
export default function CardCatalogSearch(props:SearchProps) {
 return <SearchView {...props} skin="card-catalog-search" />;
}
