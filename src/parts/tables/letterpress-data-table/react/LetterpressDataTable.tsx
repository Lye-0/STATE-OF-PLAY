'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as LetterpressDataTableProps };
/** 活版の見出しと二重の罫線。 */
export default function LetterpressDataTable(props:TableProps) {
 return <TableView {...props} skin="letterpress-data-table" />;
}
