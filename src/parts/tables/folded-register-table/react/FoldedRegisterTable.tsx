'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as FoldedRegisterTableProps };
/** 折り返した見出しから記録を読む。 */
export default function FoldedRegisterTable(props:TableProps) {
 return <TableView {...props} skin="folded-register-table" />;
}
