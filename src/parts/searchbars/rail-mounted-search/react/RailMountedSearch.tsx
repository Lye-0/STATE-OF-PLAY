'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RailMountedSearchProps };
/** 検索の走行レール。左右の支えと結果行の短い接続線で、入力から候補へのつながりを作る。 */
export default function RailMountedSearch(props:SearchProps) {
 return <SearchView {...props} skin="rail-mounted-search" />;
}
