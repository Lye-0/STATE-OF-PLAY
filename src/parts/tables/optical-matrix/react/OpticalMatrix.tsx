'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as OpticalMatrixProps };
/** 列見出しのスリットを光が横切る、奥行きのある精密な表。 */
export default function OpticalMatrix(props:TableProps) {
 return <TableView {...props} skin="optical-matrix" />;
}
