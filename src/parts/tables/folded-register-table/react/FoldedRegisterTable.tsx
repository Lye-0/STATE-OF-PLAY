'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as FoldedRegisterTableProps };
/** 折り返した記録表。上の見出し帯と表本体を分け、行の内容には装飾を重ねない。 */
export default function FoldedRegisterTable(props:TableProps) {
 return <TableView {...props} skin="folded-register-table" />;
}
