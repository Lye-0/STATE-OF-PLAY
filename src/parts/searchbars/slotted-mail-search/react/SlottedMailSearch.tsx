'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as SlottedMailSearchProps };
/** 投函口の入力面と受領票の結果列。 */
export default function SlottedMailSearch(props:SearchProps) {
 return <SearchView {...props} skin="slotted-mail-search" />;
}
