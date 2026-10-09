'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as FoldedRegisterTableProps };
/** 題字面から検索の折返し面を経て記録紙へ続く折り台帳。二つの折れ目を逆向きに接続し、面ごとの奥行きと余白で読む・探す・比較する領域を分ける。 */
export default function FoldedRegisterTable(props:TableProps) {
 return <TableView {...props} skin="folded-register-table" />;
}
