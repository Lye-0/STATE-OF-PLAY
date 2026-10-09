'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "shuttle-key-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type ShuttleKeyPagesProps = FoundationProps;
/** 一本の案内線に沿って舟形の選択面を移すページ送り。丸い筐体を除き、番号と選択した舟の位置を結びつける。 */
export default forwardRef<HTMLDivElement, ShuttleKeyPagesProps>(function ShuttleKeyPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
