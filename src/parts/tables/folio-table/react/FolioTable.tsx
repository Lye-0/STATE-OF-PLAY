'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as FolioTableProps };
/** 綴じた資料を並べるテーブル。選択した行の背にしおりが差し込まれる。 */
export default function FolioTable(props:TableProps) {
 return <TableView {...props} skin="folio-table" />;
}
