'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as OpenSheetTableProps };
/** 外枠を抑えてデータの水平線を主役にする。 */
export default function OpenSheetTable(props:TableProps) {
 return <TableView {...props} skin="open-sheet-table" />;
}
