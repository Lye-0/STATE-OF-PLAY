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
/** 円形を崩さないコインのページ送り。数字の座を正円のまま保持し、選択した一枚だけ刻印。 */
export default forwardRef<HTMLDivElement, CoinStackPagesProps>(function CoinStackPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
