'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as RibbonRegisterTableProps };
/** 実queryの裏面と実選択数・解除の表面を、一回の大きい半ひねりで連続する布へ再設計する。88pxの平らな二つの操作面が112pxの高さ差と48pxの空隙を渡り、全幅の二つの斜めの縁が表裏の向きを変える。短い返端・割尾・孔を廃し、非選択でも選択面の寸法を予約して文字と押面を動かさない。 */
export default function RibbonRegisterTable(props:TableProps) {
 return <TableView {...props} skin="ribbon-register-table" />;
}
