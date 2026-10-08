'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as RibbonRegisterTableProps };
/** 帯状の見出しを持つ記録表。表題から列見出しへ細い赤紫の帯を引き、セルの本文は明るく固定。 */
export default function RibbonRegisterTable(props:TableProps) {
 return <TableView {...props} skin="ribbon-register-table" />;
}
