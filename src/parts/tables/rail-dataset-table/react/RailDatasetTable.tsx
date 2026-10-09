'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as RailDatasetTableProps };
/** 実識別列と選択列の固定床が、その実幅のまま下へ続いて横送りの溝を支持する。実表の24pxの小口から、開いた横送り溝と80pxのnative鞍形つまみが交差して出る。独立した塗り矩形のrangeパネルを廃し、固定床・支持小口・可動読面の前後を一つの断面にする。実横scrollと双方向に同期し、狭幅で固定識別列を解放すると支持も48pxへ戻る。文字は不透明な水平面で読む。 */
export default function RailDatasetTable(props:TableProps) {
 return <TableView {...props} skin="rail-dataset-table" scrollControl={props.scrollControl ?? true} />;
}
