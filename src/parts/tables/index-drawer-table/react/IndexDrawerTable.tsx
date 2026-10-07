'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as IndexDrawerTableProps };
/** 索引の見出しを引き出した記録面へ接続。 */
export default function IndexDrawerTable(props:TableProps) {
 return <TableView {...props} skin="index-drawer-table" />;
}
