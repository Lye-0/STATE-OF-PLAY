'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "slatted-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type SlattedPagesProps = FoundationProps;
/** ルーバーの各区画を番号キーにする。現在地の板だけを明るく開く。 */
export default forwardRef<HTMLDivElement, SlattedPagesProps>(function SlattedPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
