'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as CaptionLineSearchProps };
/** 候補の細い左罫と右に揃う対象選択を保ち、入口72px・検索名25px・候補名19pxで読み順を整える。候補の説明と実補足を別の読む行へ戻し、枠と影を増やさず行間を確保。対象を示す下線は選択時だけ、native入力と長文は同じ平らな読む面に置く。 */
export default function CaptionLineSearch(props:SearchProps) {
 return <SearchView {...props} skin="caption-line-search" />;
}
