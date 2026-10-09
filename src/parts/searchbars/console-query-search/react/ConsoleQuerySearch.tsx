'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as ConsoleQuerySearchProps };
/** 実検索の暗い操作面から、56pxの偏った脚だけが下へ残る検索コンソール。実候補の明るい湾曲面は脚から20px離れ、44pxの横腕で支える。候補を小さい箱へ分解せず一つの開いた画面へ置き、片側70pxの曲がった下端と16pxの側面で操作面と読む面を区別する。 */
export default function ConsoleQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="console-query-search" />;
}
