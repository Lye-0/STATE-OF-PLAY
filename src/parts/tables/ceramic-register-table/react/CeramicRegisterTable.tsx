'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as CeramicRegisterTableProps };
/** 磁器の記録トレイ。表の内容を平らな面へ保ち、見出しと操作欄の縁だけを柔らかく仕上げる。 */
export default function CeramicRegisterTable(props:TableProps) {
 return <TableView {...props} skin="ceramic-register-table" />;
}
