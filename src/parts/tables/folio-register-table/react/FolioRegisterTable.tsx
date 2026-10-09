'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as FolioRegisterTableProps };
/** 丸タブと外紙を廃し、actual列名・sort・resizeを一枚の連続した64pxの折り冠へ編集する。実columnの境界で山谷が交互に接し、平らな読む前面が同じ本文列へ降りる。偽の紙葉や金属combを置かず、actual columnsだけが紙の折面を決める。文字・値・native押面は水平のまま保持する。 */
export default function FolioRegisterTable(props:TableProps) {
 return <TableView {...props} skin="folio-register-table" />;
}
