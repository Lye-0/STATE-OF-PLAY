'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as CaptionLineSearchProps };
/** キャプションの下に結果を並べる。 */
export default function CaptionLineSearch(props:SearchProps) {
 return <SearchView {...props} skin="caption-line-search" />;
}
