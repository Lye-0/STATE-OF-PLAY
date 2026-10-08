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
/** 紙の半券をめくるページ送り。選択券の折れた端が現在地の目印になる。 */
export default forwardRef<HTMLDivElement, RibbonTicketPagesProps>(function RibbonTicketPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
