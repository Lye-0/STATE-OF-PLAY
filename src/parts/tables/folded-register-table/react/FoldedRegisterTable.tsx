'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as FoldedRegisterTableProps };
/** 折った登録票を表題と記録面に分ける。 */
export default function FoldedRegisterTable(props:TableProps) {
 return <TableView {...props} skin="folded-register-table" />;
}
