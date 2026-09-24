'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as MarginSearchProps };
/** 書き込み用の余白を残した縦の背。候補を選ぶと細いしおりが現れる。 */
export default function MarginSearch(props:SearchProps) {
 return <SearchView {...props} skin="margin-search" />;
}
