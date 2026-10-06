'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as BorderWeaveTableProps };
/** 行と列で異なる細さの線を使い、情報を一枚の織目として整える。 */
export default function BorderWeaveTable(props:TableProps) {
 return <TableView {...props} skin="border-weave-table" />;
}
