'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as SoftProjectTableProps };
/** プロジェクト一覧の柔らかな外枠。 */
export default function SoftProjectTable(props:TableProps) {
 return <TableView {...props} skin="soft-project-table" />;
}
