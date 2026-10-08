'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as ReceiptQuerySearchProps };
/** 検索の受付票。入力条件と結果の控えをミシン目で区切り、記入から確認まで縦に読める構成。 */
export default function ReceiptQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="receipt-query-search" />;
}
