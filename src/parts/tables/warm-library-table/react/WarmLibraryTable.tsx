'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as WarmLibraryTableProps };
/** 資料一覧に合う穏やかな表。 */
export default function WarmLibraryTable(props:TableProps) {
 return <TableView {...props} skin="warm-library-table" />;
}
