'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as FolioRegisterTableProps };
/** 見開きの登録簿。背の線を左に残し、検索とデータを同じ紙面へ置いて記録を読み進める。 */
export default function FolioRegisterTable(props:TableProps) {
 return <TableView {...props} skin="folio-register-table" />;
}
