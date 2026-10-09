'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ArchiveLedgerTableProps };
/** 実ページそのものを選ぶ大きい索引を一枚の実記録の端に置く。索引は実page数と現在pageから作り、ネイティブボタンの番号で読む原紙を切り替える。件数小札や装飾の背を廃し、112pxの実ページの自由端と連続した表が一つの資料になる。多ページは前後2と両端に限定し、架空の紙束は増やさない。 */
export default function ArchiveLedgerTable(props:TableProps) {
 return <TableView {...props} skin="archive-ledger-table" pageIndex={props.pageIndex ?? true} />;
}
