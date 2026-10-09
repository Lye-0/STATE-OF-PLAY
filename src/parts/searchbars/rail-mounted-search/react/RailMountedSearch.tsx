'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RailMountedSearchProps };
/** 一つの厚い縦レールに、実検索口と候補の棚を組む。検索口の36pxの腕はレールへ入り、候補の紙面は8pxの左小口と12pxの下側を持つ。細い青い罫を太らせただけの箱を廃し、読む面をレールから16px離した位置に揃える。字面・native入力は動かさず、17件でも読む棚の中だけでスクロールする。 */
export default function RailMountedSearch(props:SearchProps) {
 return <SearchView {...props} skin="rail-mounted-search" />;
}
