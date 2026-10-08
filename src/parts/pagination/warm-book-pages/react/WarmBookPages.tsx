'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "warm-book-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type WarmBookPagesProps = FoundationProps;
/** 狭幅でも各ページの操作幅を34px以上に保ち、必要に応じて行を折り返す。 */
export default forwardRef<HTMLDivElement, WarmBookPagesProps>(function WarmBookPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
