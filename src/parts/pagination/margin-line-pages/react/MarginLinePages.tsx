'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "margin-line-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type MarginLinePagesProps = FoundationProps;
/** 開いたL断面の組版受けへ、実索引の読む床と大きい現在ノンブルの活字面を載せるページ送り。赤い細罫と大きい数字だけの方式を廃止し、28pxの厚い側受けと14pxの下底、一枚の込め物の床、現在面の14pxの上肩/8pxの側面/12pxの受面で実段差を作る。他の小さい索引は同じ床に固定し、四辺の額縁や独立した箱の列を作らない。番号とnative hitはhoverで動かさない。 */
export default forwardRef<HTMLDivElement, MarginLinePagesProps>(function MarginLinePages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
