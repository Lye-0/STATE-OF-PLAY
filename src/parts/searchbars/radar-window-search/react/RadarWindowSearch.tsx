'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RadarWindowSearchProps };
/** 照準を合わせる検索。円形の検索記号から入力線へつなぎ、結果は検出した行の左線で示す。 */
export default function RadarWindowSearch(props:SearchProps) {
 return <SearchView {...props} skin="radar-window-search" />;
}
