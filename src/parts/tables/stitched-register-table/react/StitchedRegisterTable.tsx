'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as StitchedRegisterTableProps };
/** 左綴じと交差線の反復を廃し、実列幅を持つ布帯の見出しが一つの56pxの共通縫い代を通り、本文へ降りる織り登録面に再構成する。孔と糸は実column境界へ置き、列幅調整に追従する。表の四辺へ縫い目を描かず、情報の列と布の方向を一致させる。 */
export default function StitchedRegisterTable(props:TableProps) {
 return <TableView {...props} skin="stitched-register-table" />;
}
