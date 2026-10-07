'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as InspectionGridTableProps };
/** 計測結果を方眼の区画に並べる。 */
export default function InspectionGridTable(props:TableProps) {
 return <TableView {...props} skin="inspection-grid-table" />;
}
