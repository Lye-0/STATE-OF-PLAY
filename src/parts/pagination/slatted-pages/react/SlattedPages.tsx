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
/** 二本の縦の胴縁に、実ページの広い羽目板を取り付けるページ送り。54pxの板面、12pxの上木口と10pxの下木口、板間4pxの空隙を組む。幅10pxの胴縁へ各板の両端を4px重ね、支持から離れた板にしない。番号は実板へ固定し、省略区間の隙間では胴縁だけが続く。前後も同じ板材を持つ。 */
export default forwardRef<HTMLDivElement, SlattedPagesProps>(function SlattedPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
