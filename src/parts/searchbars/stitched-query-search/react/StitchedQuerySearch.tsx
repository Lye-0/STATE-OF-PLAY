'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as StitchedQuerySearchProps };
/** queryの補強から下端まで32pxの一本の布背を通し、実候補の独立紙を一対の孔で綴じる。候補の布側孔と紙側孔は同じ実y32px、中心間40pxの糸が12pxの空間を渡る。各候補間も背を連続し、孔の下へ同色の面を敷かない。繰り返す斜線を廃し、一本の背と実資料の綴じる位置を構造にする。native名・説明・補足は孔から離れた平らな紙面で読む。 */
export default function StitchedQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="stitched-query-search" />;
}
