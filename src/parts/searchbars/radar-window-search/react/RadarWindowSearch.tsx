'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RadarWindowSearchProps };
/** 探索窓の中心から結果の経路を読む。 */
export default function RadarWindowSearch(props:SearchProps) {
 return <SearchView {...props} skin="radar-window-search" />;
}
