'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as CaptionRegisterTableProps };
/** 実題字の上面、実説明の前面、実件数の足面が一つの三角断面で連続する自立captionへ再設計する。側captionを表の全高へ伸ばさず実内容量で高さを決め、64pxの側断面と40pxの足が自立する関係を示す。狭幅は全幅で題字・説明・件数を縦に読み、62pxの細い題字へ戻さない。 */
export default function CaptionRegisterTable(props:TableProps) {
 return <TableView {...props} skin="caption-register-table" />;
}
