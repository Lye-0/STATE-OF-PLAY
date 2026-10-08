'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as InspectionGridTableProps };
/** 検査データの格子。見出し、状態、進行度を独立した列へ揃え、選択した行を明面で追える。 */
export default function InspectionGridTable(props:TableProps) {
 return <TableView {...props} skin="inspection-grid-table" />;
}
