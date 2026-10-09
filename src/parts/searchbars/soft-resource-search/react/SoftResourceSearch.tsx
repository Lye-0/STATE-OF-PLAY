'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as SoftResourceSearchProps };
/** 資料の名前・説明・識別子を分けて読む検索。小さな候補カードとコード欄で、似た名前の資料を選びやすくする。 */
export default function SoftResourceSearch(props:SearchProps) {
 return <SearchView {...props} skin="soft-resource-search" />;
}
