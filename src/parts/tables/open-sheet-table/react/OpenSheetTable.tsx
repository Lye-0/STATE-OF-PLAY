'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as OpenSheetTableProps };
/** 既存の開いた一枚の紙と余白の編集を保持し、題字を30px、狭幅24pxへ抑えて列名との比率を整える。実件数を題字の下端へ揃え、検索と実表の間隔を同じ28pxへ統一。薄い紙の通常面と2pxの列見出しだけで、飾り枠を増やさず読み順を磨く。 */
export default function OpenSheetTable(props:TableProps) {
 return <TableView {...props} skin="open-sheet-table" />;
}
