'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RadarWindowSearchProps };
/** 小さな探索窓と横長い結果面。 */
export default function RadarWindowSearch(props:SearchProps) {
 return <SearchView {...props} skin="radar-window-search" />;
}
