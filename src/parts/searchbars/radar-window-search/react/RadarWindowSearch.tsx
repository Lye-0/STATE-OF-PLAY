'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RadarWindowSearchProps };
/** 検索軸と実候補の照準を保ち、14pxの検索名・48pxの実操作・17pxの候補名と14pxの説明へ整える。照準は実候補の中央に固定し、検索軸の2pxと14pxの点が対応する。狭幅・RTLでも軸と候補の関係を保ち、実補足を消さず自然に折り返す。 */
export default function RadarWindowSearch(props:SearchProps) {
 return <SearchView {...props} skin="radar-window-search" />;
}
