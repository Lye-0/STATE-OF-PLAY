'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as BlueprintTableProps };
/** 製図の寸法線と座標のリズムで、数値と状態を整然と読む。 */
export default function BlueprintTable(props:TableProps) {
 return <TableView {...props} skin="blueprint-table" />;
}
