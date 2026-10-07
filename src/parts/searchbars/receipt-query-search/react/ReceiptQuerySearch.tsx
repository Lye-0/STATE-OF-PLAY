'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as ReceiptQuerySearchProps };
/** 結果をレシートの区画に並べる。 */
export default function ReceiptQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="receipt-query-search" />;
}
