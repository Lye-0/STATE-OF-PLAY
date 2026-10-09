'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as StoneRecordTableProps };
/** 灰白の露頭の全高を大きい傾斜と長い割れで一体に切り出し、その内側に水平な実記録の床を収める。件数・検索・現在ページは同じ露頭の上面へ置き、実表だけが深い16pxの切口を持つ読む床になる。短い隅欠けや丸角板を廃し、長い非対称な断面の外形と実記録の平面を対比する。 */
export default function StoneRecordTable(props:TableProps) {
 return <TableView {...props} skin="stone-record-table" />;
}
