'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as BlueprintRegisterTableProps };
/** 設計資料の列と数値を区画化する。 */
export default function BlueprintRegisterTable(props:TableProps) {
 return <TableView {...props} skin="blueprint-register-table" />;
}
