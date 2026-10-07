'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as StitchedRegisterTableProps };
/** 布貼り台帳の縫い目と行。 */
export default function StitchedRegisterTable(props:TableProps) {
 return <TableView {...props} skin="stitched-register-table" />;
}
