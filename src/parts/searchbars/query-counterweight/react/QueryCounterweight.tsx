'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as QueryCounterweightProps };
/** 片側の重い検索印と、軽い文字の領域で入力と実行を釣り合わせる。 */
export default function QueryCounterweight(props:SearchProps) {
 return <SearchView {...props} skin="query-counterweight" />;
}
