'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as IndexDrawerTableProps };
/** 引き出しの番号札を持つデータ面。 */
export default function IndexDrawerTable(props:TableProps) {
 return <TableView {...props} skin="index-drawer-table" />;
}
