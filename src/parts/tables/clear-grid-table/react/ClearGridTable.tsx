'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ClearGridTableProps };
/** 列境界を明確にした密度の高いデータ表。細い縦罫とコンパクトな行で値を照合し、選択と操作は44pxの領域を維持する。 */
export default function ClearGridTable(props:TableProps) {
 return <TableView {...props} skin="clear-grid-table" />;
}
