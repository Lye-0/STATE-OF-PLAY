'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as FolioRegisterTableProps };
/** 冊子の綴じ目から列見出しを連続させる。 */
export default function FolioRegisterTable(props:TableProps) {
 return <TableView {...props} skin="folio-register-table" />;
}
