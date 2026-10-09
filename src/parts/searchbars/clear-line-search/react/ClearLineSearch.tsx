'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as ClearLineSearchProps };
/** 検索・絞込み・候補を短い罫線で揃える検索。低い行と広い本文列で、一覧を続けて読み取れる構成にする。 */
export default function ClearLineSearch(props:SearchProps) {
 return <SearchView {...props} skin="clear-line-search" />;
}
