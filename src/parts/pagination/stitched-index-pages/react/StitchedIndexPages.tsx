'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stitched-index-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type StitchedIndexPagesProps = FoundationProps;
/** 一枚の織布の上下を大きく折り返し、縫合の孔と折返しの小口で実索引を支えるページ送り。点線の番号枠を廃し、30pxの丸く張った上下の布返し、16pxピッチの孔へ通る32px周期の一本の縫い糸、横糸の読む面へ再構成する。数字は一枚の布の内側へ固定し、狭幅では三列にして長い番号を縫う端へ寄せない。前後の実操作も同じ布返しの小口を持つ。 */
export default forwardRef<HTMLDivElement, StitchedIndexPagesProps>(function StitchedIndexPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
