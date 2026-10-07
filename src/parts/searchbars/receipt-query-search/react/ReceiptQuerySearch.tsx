'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as ReceiptQuerySearchProps };
/** 検索票の条件を上、結果を下の受領欄へ。 */
export default function ReceiptQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="receipt-query-search" />;
}
