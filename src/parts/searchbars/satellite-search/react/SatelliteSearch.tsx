'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as SatelliteSearchProps };
/** 入力面と送信キーが分離した島。フォーカスで二つの軌道がつながる。 */
export default function SatelliteSearch(props:SearchProps) {
 return <SearchView {...props} skin="satellite-search" />;
}
