'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as PrismSlitSearchProps };
/** 上下の光学スリットが開き、薄い分光面が検索領域を包む。 */
export default function PrismSlitSearch(props:SearchProps) {
 return <SearchView {...props} skin="prism-slit-search" />;
}
