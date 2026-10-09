'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as SlottedMailSearchProps };
/** 検索の投函口と折返し付きの返答紙を組む検索欄。口の上下の厚みと各紙の折れた上端を分け、検索する面と届いた候補の関係を示す。 */
export default function SlottedMailSearch(props:SearchProps) {
 return <SearchView {...props} skin="slotted-mail-search" />;
}
