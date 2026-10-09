'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as OpenShelfSearchProps };
/** 開いた検索面の余白を保ち、20pxの実候補名・14pxの説明・13pxの実補足を三つの読む行へ整える。欄全体の枠を増やさず、入口の2px、実補足の左の22px、結果の1pxの罫が役割を分ける。48pxの実操作と14pxの対象名で、狭幅とRTLでも読む順序を保つ。 */
export default function OpenShelfSearch(props:SearchProps) {
 return <SearchView {...props} skin="open-shelf-search" />;
}
