'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "ribbon-ticket-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type RibbonTicketPagesProps = FoundationProps;
/** 現在ページのリボン札と実前後操作を、同じ切れた尾と平たい織面へ揃えるページ送り。元のリボンの印を保持し、丸角の矢印を廃止する。現在札は9px、前後札は7pxの尾を持ち、読む数字と矢印は同じ固定面から動かさない。 */
export default forwardRef<HTMLDivElement, RibbonTicketPagesProps>(function RibbonTicketPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
