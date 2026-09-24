'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as GalleryTableProps };
/** 大きな余白と浮いた行。作品の目録のようにデータを展示する。 */
export default function GalleryTable(props:TableProps) {
 return <TableView {...props} skin="gallery-table" />;
}
