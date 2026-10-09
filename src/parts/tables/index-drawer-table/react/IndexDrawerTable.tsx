'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as IndexDrawerTableProps };
/** 既存の引出しの上蓋・本文・前板の段差を保持し、重い茶色を上蓋と前板の16pxの小口へ限定する。実表は左右16pxの内側へ入り、通常・選択・操作を不透明な一枚の明るい紙面へ揃える。検索の重ね枠と行ごとの厚い段差は削り、実記録が主役の引出しに整える。 */
export default function IndexDrawerTable(props:TableProps) {
 return <TableView {...props} skin="index-drawer-table" />;
}
