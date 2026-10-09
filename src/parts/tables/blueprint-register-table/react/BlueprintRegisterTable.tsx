'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as BlueprintRegisterTableProps };
/** 上下のずれた板を廃し、実column名の上軸と、sort/filter/page後のactual表示位置を読む80pxの片側軸を持つ開いた照合原図へ再設計する。行番号は実page・pageSize・可視順から導き、架空の目盛りやIDを置かない。24pxの上軸と16pxの側断面の交点だけに厚みを集め、下と反対側は開放する。 */
export default function BlueprintRegisterTable(props:TableProps) {
 return <TableView {...props} skin="blueprint-register-table" rowNumbers={props.rowNumbers ?? true} />;
}
