'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as RibbonRegisterTableProps };
/** 紙束の外側を走るリボンを二つの通し口で題字紙へ結ぶ台帳。検索面と記録紙は別の面に置き、選択件数の札はリボンと同じ素材で操作のまとまりを示す。 */
export default function RibbonRegisterTable(props:TableProps) {
 return <TableView {...props} skin="ribbon-register-table" />;
}
