'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as CaptionRegisterTableProps };
/** 小見出しと件数を大きく区切って読む。 */
export default function CaptionRegisterTable(props:TableProps) {
 return <TableView {...props} skin="caption-register-table" />;
}
