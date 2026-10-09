'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as OpenSheetTableProps };
/** 題字札・検索面・記録紙を背景へ抜ける余白で分離した表。角の支持片が紙を受け、データの連続した面を保ちながら上部の操作領域を独立して読む。 */
export default function OpenSheetTable(props:TableProps) {
 return <TableView {...props} skin="open-sheet-table" />;
}
