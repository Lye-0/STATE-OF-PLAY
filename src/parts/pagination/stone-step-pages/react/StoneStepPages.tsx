'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stone-step-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type StoneStepPagesProps = FoundationProps;
/** 一体の石梁に、実表示順の踏面と蹴上げを切り出したページ送り。離れた石キーを全廃し、10pxずつ深く切込む実踏面、12pxの連続した蹴上げ、全高の側壁と下底が一つの断面を作る。省略区間も同じ石梁の続きとして保ち、狭幅でも隙間のない一列の階段を崩さない。番号とnative hitは実踏面に固定し、現在面だけが明瞭に変わる。 */
export default forwardRef<HTMLDivElement, StoneStepPagesProps>(function StoneStepPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
