'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as SlottedMailSearchProps };
/** 郵便口のような細長い検索欄。 */
export default function SlottedMailSearch(props:SearchProps) {
 return <SearchView {...props} skin="slotted-mail-search" />;
}
