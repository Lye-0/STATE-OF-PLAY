'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as InspectionGridTableProps };
/** 実列名とnative設定幅の操作を深い一つの計測横桁へ集める。40pxの下小口に「設定幅」と値を明示し、28pxの側面は列境界のresizerとなる。表示値は設定幅であり、余白へ伸びた描画幅と区別する。 */
export default function InspectionGridTable(props:TableProps) {
 return <TableView {...props} skin="inspection-grid-table" />;
}
