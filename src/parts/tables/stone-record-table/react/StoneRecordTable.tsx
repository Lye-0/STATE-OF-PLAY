'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as StoneRecordTableProps };
/** 石の記録台。見出しを浅い上段、データを明るい平面、ページ操作を下の台座へ整理する。 */
export default function StoneRecordTable(props:TableProps) {
 return <TableView {...props} skin="stone-record-table" />;
}
