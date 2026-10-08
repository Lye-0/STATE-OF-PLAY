'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as RailDatasetTableProps };
/** データを載せるレール。表の上下に細い支えを置き、列の境界は薄い線で読み取りを助ける。 */
export default function RailDatasetTable(props:TableProps) {
 return <TableView {...props} skin="rail-dataset-table" />;
}
