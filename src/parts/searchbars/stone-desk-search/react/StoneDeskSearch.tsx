'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as StoneDeskSearchProps };
/** 石の机の入力面から明るい結果面へ。 */
export default function StoneDeskSearch(props:SearchProps) {
 return <SearchView {...props} skin="stone-desk-search" />;
}
