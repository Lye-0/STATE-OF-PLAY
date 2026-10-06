'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as DatedCardTableProps };
/** 列見出しの小さな札と、下の明細行を紙の層として組む。 */
export default function DatedCardTable(props:TableProps) {
 return <TableView {...props} skin="dated-card-table" />;
}
