'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "ledger-page-tabs",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type LedgerPageTabsProps = FoundationProps;
/** 帳簿の厚い閉じ口へ、実ページを記す長い紙札を差し込むページ送り。番号下の短線を廃止し、62pxの読む紙札とその下の紙先（広幅20px、狭幅上段124px）、34pxの成形された閉じ口へ再構成する。現在札は同じ紙形のまま濃い実選択印を持ち、文字とnative hitを閉じ口の上に固定する。前後も帳簿の実左右の留め口へ揃える。 */
export default forwardRef<HTMLDivElement, LedgerPageTabsProps>(function LedgerPageTabs(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
