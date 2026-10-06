'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as FolioDrawerTableProps };
/** 広い見出しと細い引出し状の行で、明細と読取情報を分離する。 */
export default function FolioDrawerTable(props:TableProps) {
 return <TableView {...props} skin="folio-drawer-table" />;
}
