'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as EssentialSearchbarProps };
/** 日常の検索に合わせやすい、読みやすい入力とフィルター。 */
export default function EssentialSearchbar(props:SearchProps) {
 return <SearchView {...props} skin="essential-searchbar" />;
}
