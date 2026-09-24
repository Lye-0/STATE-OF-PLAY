'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ControlRoomTableProps };
/** 操作卓の細かな格子と状態灯。行を選ぶと一本のラインが点灯する。 */
export default function ControlRoomTable(props:TableProps) {
 return <TableView {...props} skin="control-room-table" />;
}
