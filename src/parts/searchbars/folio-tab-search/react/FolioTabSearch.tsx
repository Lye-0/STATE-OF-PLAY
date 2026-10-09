'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as FolioTabSearchProps };
/** 36pxの丸い背と16pxの開いた溝を持つ、検索する分冊。実フィルターを丸い肩の索引へ置き換え、選択した索引の底は候補を読む紙へ途切れず続く。検索面と候補の紙は離れ、溝の40pxの綴じ足が背と紙へ12pxずつ入り、狭幅は28pxの足が8pxずつ渡る。実候補は一枚の紙に読み順で並べ、紙面と字面を傾けない。 */
export default function FolioTabSearch(props:SearchProps) {
 return <SearchView {...props} skin="folio-tab-search" />;
}
