'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as CeramicRegisterTableProps };
/** 丸角板と外U取手を廃し、actual row action列を受ける全高の深い陶の側溝と広い平底へ再設計する。40pxの外口縁・16pxの内縁・上80pxと下72pxの一続きの曲面が、実action押面を包んで読む底へ戻る。行ごとの小皿に分割せず、actions無しなら溝も存在しない。溝を含めたactual tableだけが局所scrollする。 */
export default function CeramicRegisterTable(props:TableProps) {
 return <TableView {...props} skin="ceramic-register-table" actionColumnWidth={props.actionColumnWidth ?? 192} />;
}
