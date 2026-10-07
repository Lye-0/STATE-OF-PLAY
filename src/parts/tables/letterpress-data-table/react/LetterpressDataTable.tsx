'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as LetterpressDataTableProps };
/** 活版の表題と細い数表を対比させる。 */
export default function LetterpressDataTable(props:TableProps) {
 return <TableView {...props} skin="letterpress-data-table" />;
}
