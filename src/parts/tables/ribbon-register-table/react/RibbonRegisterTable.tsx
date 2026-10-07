'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as RibbonRegisterTableProps };
/** 上部の帯に表の操作を集める。 */
export default function RibbonRegisterTable(props:TableProps) {
 return <TableView {...props} skin="ribbon-register-table" />;
}
