'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as TransitBoardProps };
/** 横長の表示板と細かな区切り。並べ替えで列の見出しが切り替わる。 */
export default function TransitBoard(props:TableProps) {
 return <TableView {...props} skin="transit-board" />;
}
