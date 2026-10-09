'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as ReceiptQuerySearchProps };
/** 検索を受け付ける丸い上の機械から、実候補の一枚の紙だけが18pxと30pxのずれた余白を残して送り出される。候補の紙の入口を16px機械へ差し込み、10pxの黒い送出口と下端24px間隔の紙の切り目を持たせる。実候補と補足は20px／14pxの等幅で読む。文字やnative入力には送り出しアニメーションを掛けない。 */
export default function ReceiptQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="receipt-query-search" />;
}
