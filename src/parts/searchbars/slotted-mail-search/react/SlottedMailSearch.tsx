'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as SlottedMailSearchProps };
/** 検索語を入れる長いスリット。入口の奥行きを抑え、下の結果は幅のある読み取り面へ展開。 */
export default function SlottedMailSearch(props:SearchProps) {
 return <SearchView {...props} skin="slotted-mail-search" />;
}
