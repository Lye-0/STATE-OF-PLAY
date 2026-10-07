'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as CompactWorkTableProps };
/** 作業一覧向けの密度の高い表。 */
export default function CompactWorkTable(props:TableProps) {
 return <TableView {...props} skin="compact-work-table" />;
}
