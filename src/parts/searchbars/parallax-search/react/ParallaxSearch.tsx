'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as ParallaxSearchProps };
/** 焦点が合うように二重のレンズが開き、入力面へ光が集まる。 */
export default function ParallaxSearch(props:SearchProps) {
 return <SearchView {...props} skin="parallax-search" />;
}
