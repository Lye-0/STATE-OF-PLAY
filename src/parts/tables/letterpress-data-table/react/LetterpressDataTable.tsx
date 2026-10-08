'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as LetterpressDataTableProps };
/** 活版のデータ帳。太い表題と二重罫の列見出しを使い、数値と状態を落ち着いて読み比べる。 */
export default function LetterpressDataTable(props:TableProps) {
 return <TableView {...props} skin="letterpress-data-table" />;
}
