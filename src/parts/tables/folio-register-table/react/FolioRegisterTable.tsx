'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as FolioRegisterTableProps };
/** 冊子の背に沿って記録を置く。 */
export default function FolioRegisterTable(props:TableProps) {
 return <TableView {...props} skin="folio-register-table" />;
}
