'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as FolioTabSearchProps };
/** 冊子の索引から資料を探す。 */
export default function FolioTabSearch(props:SearchProps) {
 return <SearchView {...props} skin="folio-tab-search" />;
}
