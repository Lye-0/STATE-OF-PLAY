'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as NumericDeckTableProps };
/** 数値と進捗を大きく読み、文字の列を静かな記録帯へ分ける。 */
export default function NumericDeckTable(props:TableProps) {
 return <TableView {...props} skin="numeric-deck-table" />;
}
