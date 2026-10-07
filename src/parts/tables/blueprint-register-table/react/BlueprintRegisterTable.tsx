'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as BlueprintRegisterTableProps };
/** 設計表の縦横の読取線を揃える。 */
export default function BlueprintRegisterTable(props:TableProps) {
 return <TableView {...props} skin="blueprint-register-table" />;
}
