'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as CaptionRegisterTableProps };
/** キャプション付きの記録面。件数と表題を同じ見出し帯へ置き、検索・表・ページ操作を三段に分ける。 */
export default function CaptionRegisterTable(props:TableProps) {
 return <TableView {...props} skin="caption-register-table" />;
}
