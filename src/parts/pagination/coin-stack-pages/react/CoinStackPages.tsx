'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "coin-stack-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type CoinStackPagesProps = FoundationProps;
/** 実番号と前後の実操作を、同じ厚い硬貨の面と小口へ揃えるページ送り。元の硬貨の印を保持し、番号を矩形の札から丸い64pxの実貨へ戻す。2pxの打ち出し縁と6pxの重さのある小口、現在貨の濃い刻印を統一し、長い番号のため狭幅では三枚ずつ並べる。 */
export default forwardRef<HTMLDivElement, CoinStackPagesProps>(function CoinStackPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
