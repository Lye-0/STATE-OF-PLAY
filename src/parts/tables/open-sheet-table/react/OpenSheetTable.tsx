'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as OpenSheetTableProps };
/** 余白と細い横罫だけの一覧。 */
export default function OpenSheetTable(props:TableProps) {
 return <TableView {...props} skin="open-sheet-table" />;
}
