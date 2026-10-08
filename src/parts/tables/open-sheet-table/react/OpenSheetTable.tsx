'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as OpenSheetTableProps };
/** 余白を活かした開いたデータシート。外箱を減らし、表題・検索・列見出しの階層を大きさと罫線で作る。 */
export default function OpenSheetTable(props:TableProps) {
 return <TableView {...props} skin="open-sheet-table" />;
}
