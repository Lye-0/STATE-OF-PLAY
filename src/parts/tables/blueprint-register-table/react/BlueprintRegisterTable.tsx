'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as BlueprintRegisterTableProps };
/** 図面のデータ格子。列と行の細い罫を共有し、状態や進行度を文字と数値でも確認できる構成。 */
export default function BlueprintRegisterTable(props:TableProps) {
 return <TableView {...props} skin="blueprint-register-table" />;
}
