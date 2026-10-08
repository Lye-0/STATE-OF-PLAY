'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as IndexDrawerTableProps };
/** 整理引き出しの一覧。見出しを前板、検索を短い差込口、結果を同じ棚の資料行として表示。 */
export default function IndexDrawerTable(props:TableProps) {
 return <TableView {...props} skin="index-drawer-table" />;
}
