'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as BookplateSearchProps };
/** 大きな文字の検索を、一枚の蔵書票のような面に載せる。 */
export default function BookplateSearch(props:SearchProps) {
 return <SearchView {...props} skin="bookplate-search" />;
}
