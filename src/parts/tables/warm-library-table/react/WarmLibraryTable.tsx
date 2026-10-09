'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as WarmLibraryTableProps };
/** 書名を見出しの活字として読む蔵書台帳。書名と補足の階層、細い紙罫、独立した管理札で情報を分類する。 */
export default function WarmLibraryTable(props:TableProps) {
 return <TableView {...props} skin="warm-library-table" />;
}
