'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "folded-tab-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type FoldedTabPagesProps = FoundationProps;
/** 一枚の紙を前後へZ状に折り、24pxずれた三つの紙面で実索引を示すページ送り。閉じた左右の側壁と対称の額縁を廃止し、上の紙は奥から読む面へ進み、下の紙は読む面から奥へ戻る異なる折る方向にする。側端は開き、44pxの上下返しと8pxの折目が中央の読む紙へ連続する。実番号とnative hitは中央面へ固定し、RTLでは折紙全体の向きだけを鏡映する。 */
export default forwardRef<HTMLDivElement, FoldedTabPagesProps>(function FoldedTabPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
