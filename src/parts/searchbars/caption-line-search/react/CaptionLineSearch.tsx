'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as CaptionLineSearchProps };
/** 小見出しの下に検索面を一本の行として置く。 */
export default function CaptionLineSearch(props:SearchProps) {
 return <SearchView {...props} skin="caption-line-search" />;
}
