'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as CeramicRegisterTableProps };
/** 薄い縁と凹面の操作帯を持つ陶器の記録面。表、操作列、下部を一つの皿へ収め、材質の厚みを小さく揃える。 */
export default function CeramicRegisterTable(props:TableProps) {
 return <TableView {...props} skin="ceramic-register-table" actionColumnWidth={props.actionColumnWidth ?? 192} />;
}
