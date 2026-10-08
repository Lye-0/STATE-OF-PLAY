'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as LetterpressQuerySearchProps };
/** 資料を探す帳簿。検索語・対象分類・結果を同じ左端に揃え、結果を罫線の行として読む。 */
export default function LetterpressQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="letterpress-query-search" />;
}
