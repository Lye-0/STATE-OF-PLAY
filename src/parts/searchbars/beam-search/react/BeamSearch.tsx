'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as BeamSearchProps };
/** 入力面の両端が開き、一本の光が検索結果へ通り抜ける。 */
export default function BeamSearch(props:SearchProps) {
 return <SearchView {...props} skin="beam-search" />;
}
