'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as StitchedRegisterTableProps };
/** 縫い綴じの記録帳。外周と見出しの縫い目に装飾を限定し、データのセルは通常の表として読む。 */
export default function StitchedRegisterTable(props:TableProps) {
 return <TableView {...props} skin="stitched-register-table" />;
}
