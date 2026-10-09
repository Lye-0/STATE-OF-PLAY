'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RadarWindowSearchProps };
/** 実件数を読む計数盤と候補の測定面を分ける検索。左の固定した計数列と右の照準付き候補札で、入力後の対象数と選択位置を同時に追える。 */
export default function RadarWindowSearch(props:SearchProps) {
 return <SearchView {...props} skin="radar-window-search" />;
}
