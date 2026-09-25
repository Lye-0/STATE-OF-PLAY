'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as LgcTablesMistProps };
/** ソート、選択、固定列を読みやすくまとめた汎用のデータテーブル。 */
export default function LgcTablesMist(props:TableProps) {
 return <TableView {...props} skin="lgc-tables-mist" className={`lgc-root ${props.className??''}`} />;
}
