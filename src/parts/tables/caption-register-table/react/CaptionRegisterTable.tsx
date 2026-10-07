'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as CaptionRegisterTableProps };
/** 表の見出しを独立した標題にする。 */
export default function CaptionRegisterTable(props:TableProps) {
 return <TableView {...props} skin="caption-register-table" />;
}
