'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as StoneDeskSearchProps };
/** 検索の開口から実候補へ続く、一体の石の斜め切断面。全体の左側に72pxの大きい傾きを作り、検索の16pxの切口をその起点へ置く。各候補の箱を廃し、名前と説明は一枚の連続した切断床、実補足だけが6pxの小口で側面の彫った段へ接続する。狭幅は実補足を本文直下へ戻し、石の外形と字面の間に十分な読む幅を残す。 */
export default function StoneDeskSearch(props:SearchProps) {
 return <SearchView {...props} skin="stone-desk-search" />;
}
