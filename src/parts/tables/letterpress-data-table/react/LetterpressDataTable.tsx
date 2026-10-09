'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as LetterpressDataTableProps };
/** 既存の活版題字と一枚の薄い紙面を残し、実件数を幅104pxの独立した欄へ編集する。四つの競合する罫を削り、題字・列見出し・ページ送りに同じ4pxの組版の基準を揃える。大見出しだけで主張せず、実件数と表の情報編集を一つの比率へ整える。 */
export default function LetterpressDataTable(props:TableProps) {
 return <TableView {...props} skin="letterpress-data-table" />;
}
