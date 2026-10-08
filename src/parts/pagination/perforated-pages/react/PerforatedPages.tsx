'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "perforated-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type PerforatedPagesProps = FoundationProps;
/** 番号の穿孔紙片と実前後操作を、同じ小口と孔のピッチへ揃えるページ送り。元の切離し票を保持し、矢印の矩形枠と競合する点線を撤去する。すべての実票は3pxの紙小口と18pxピッチの2px孔を持ち、現在票だけがその同じ面で濃く変わる。 */
export default forwardRef<HTMLDivElement, PerforatedPagesProps>(function PerforatedPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
