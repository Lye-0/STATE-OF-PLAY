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
/** 帳簿の背を一つの棚へ並べるページ送り。狭幅で背を二段に積まず、横に続く棚の中から番号を選ぶ。 */
export default forwardRef<HTMLDivElement, LedgerPageTabsProps>(function LedgerPageTabs(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
