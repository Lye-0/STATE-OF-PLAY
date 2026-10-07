'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as RibbonRegisterTableProps };
/** 帯の表題と選択した記録行を接続。 */
export default function RibbonRegisterTable(props:TableProps) {
 return <TableView {...props} skin="ribbon-register-table" />;
}
