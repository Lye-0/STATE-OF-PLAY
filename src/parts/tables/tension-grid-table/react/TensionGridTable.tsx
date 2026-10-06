'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as TensionGridTableProps };
/** 四方に張った薄い格子の上で、選んだ行を一本の線で示す。 */
export default function TensionGridTable(props:TableProps) {
 return <TableView {...props} skin="tension-grid-table" />;
}
