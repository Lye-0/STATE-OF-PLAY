'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ProgressTubeTableProps };
/** 数値の横に小さな縦の進捗槽を置き、値と状態をまとめて読む。 */
export default function ProgressTubeTable(props:TableProps) {
 return <TableView {...props} skin="progress-tube-table" />;
}
