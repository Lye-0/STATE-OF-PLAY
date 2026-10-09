'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ReceiptRegisterTableProps };
/** 件数小控えと離れたfooter票を廃し、actual checkbox列そのものを80pxの全高の確認控え帯へ再設計する。選択数・解除が上端、実行ごとの確認欄と交互の大きい紙肩が本紙との分節を決める。未選択でも帯を予約し、本文・glyph・native押面を動かさない。選択不可やcheckbox無しでは架空の確認欄を作らず、ページ送りは同じ本紙の下端に置く。 */
export default function ReceiptRegisterTable(props:TableProps) {
 return <TableView {...props} skin="receipt-register-table" selectionColumnWidth={props.selectionColumnWidth ?? 80} />;
}
