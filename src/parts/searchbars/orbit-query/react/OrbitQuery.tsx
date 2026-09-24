'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as OrbitQueryProps };
/** 楕円の軌道が回転して検索レンズを囲み、見つけた候補へ焦点を結ぶ。 */
export default function OrbitQuery(props:SearchProps) {
 return <SearchView {...props} skin="orbit-query" />;
}
