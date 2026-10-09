'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as SlottedMailSearchProps };
/** 差込口と実候補の棚を保ち、実補足を独立した読む行へ揃える。検索口は1px、棚の底は3pxと役割を分け、操作48pxと14pxの対象名を確保。狭幅でも補足を消さず、長い候補と空・失敗・再試行で同じ読む順序を保つ。 */
export default function SlottedMailSearch(props:SearchProps) {
 return <SearchView {...props} skin="slotted-mail-search" />;
}
