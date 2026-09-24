'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ObsidianGridProps };
/** 黒い石の面を整列し、選択された行の継ぎ目だけが開く。 */
export default function ObsidianGrid(props:TableProps) {
 return <TableView {...props} skin="obsidian-grid" />;
}
