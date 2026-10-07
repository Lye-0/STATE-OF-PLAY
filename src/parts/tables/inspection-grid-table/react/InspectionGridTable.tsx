'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as InspectionGridTableProps };
/** 検査票の列罫と進行計を明瞭にする。 */
export default function InspectionGridTable(props:TableProps) {
 return <TableView {...props} skin="inspection-grid-table" />;
}
