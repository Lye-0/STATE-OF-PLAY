'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as FloatingRowTableProps };
/** 各行を低い独立面へ分け、選択した行の縁で読み位置を保つ。 */
export default function FloatingRowTable(props:TableProps) {
 return <TableView {...props} skin="floating-row-table" />;
}
