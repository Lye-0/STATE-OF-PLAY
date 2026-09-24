'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as TypesetterSearchProps };
/** 大きな余白と活版の文字。入力すると二本の罫線が左右からつながる。 */
export default function TypesetterSearch(props:SearchProps) {
 return <SearchView {...props} skin="typesetter-search" />;
}
