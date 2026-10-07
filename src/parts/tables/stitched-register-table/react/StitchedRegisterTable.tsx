'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as StitchedRegisterTableProps };
/** 縫い目の表題と無地の表を分ける。 */
export default function StitchedRegisterTable(props:TableProps) {
 return <TableView {...props} skin="stitched-register-table" />;
}
