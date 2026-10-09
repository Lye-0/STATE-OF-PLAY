'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as FoldedQuerySearchProps };
/** 検索と対象を置く上の面が52pxの折り返しを通り、実候補の紙の背へ降りる一枚の折り紙。本文の紙は右の返しから24px内側へ浮かせ、6pxの側面と10pxの自由端が紙の厚みを示す。通常の同色の枠を廃し、native検索欄と候補の読む面を平らに保つ。 */
export default function FoldedQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="folded-query-search" />;
}
