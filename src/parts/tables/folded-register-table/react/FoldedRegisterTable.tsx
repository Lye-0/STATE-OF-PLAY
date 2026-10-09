'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as FoldedRegisterTableProps };
/** 実検索と選択を載せる220pxの背面を実表の隣へ置き、全高の48pxの一枚の返面が記録前面へ回り込む。二面を細い取手でつながず、操作面の向きと本文の向きを一つの長い折面で決める。狭幅では同じ広い返面が上へ回り、native検索・文字・押面を変形しない。 */
export default function FoldedRegisterTable(props:TableProps) {
 return <TableView {...props} skin="folded-register-table" />;
}
