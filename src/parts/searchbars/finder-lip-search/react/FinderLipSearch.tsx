'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as FinderLipSearchProps };
/** 上の薄い庇と下の広い入力面を分け、検索の入口を読みやすくする。 */
export default function FinderLipSearch(props:SearchProps) {
 return <SearchView {...props} skin="finder-lip-search" />;
}
