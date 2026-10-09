'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as SoftProjectTableProps };
/** 状態と進捗をまとめて追うプロジェクト表。広い行間、短い状態札、細い進捗線により案件を見比べる。 */
export default function SoftProjectTable(props:TableProps) {
 return <TableView {...props} skin="soft-project-table" />;
}
