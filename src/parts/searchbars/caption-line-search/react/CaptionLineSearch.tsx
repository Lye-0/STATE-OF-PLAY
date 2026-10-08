'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as CaptionLineSearchProps };
/** 検索見出しと結果のキャプションを分ける。細い帯を使い、情報が増えても面の階層を読み取れる。 */
export default function CaptionLineSearch(props:SearchProps) {
 return <SearchView {...props} skin="caption-line-search" />;
}
