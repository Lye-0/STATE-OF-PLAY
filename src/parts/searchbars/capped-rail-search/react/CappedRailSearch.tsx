'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as CappedRailSearchProps };
/** 検索語を横のレールへ載せ、左右の端で範囲を明確にする。 */
export default function CappedRailSearch(props:SearchProps) {
 return <SearchView {...props} skin="capped-rail-search" />;
}
