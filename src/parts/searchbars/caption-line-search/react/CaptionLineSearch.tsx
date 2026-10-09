'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as CaptionLineSearchProps };
/** 候補を編集索引の紙面に組む検索。余白の番号・分類欄と見出し・注記を分け、通常幅では二列、狭幅では同じ情報単位の一列で読む。 */
export default function CaptionLineSearch(props:SearchProps) {
 return <SearchView {...props} skin="caption-line-search" />;
}
