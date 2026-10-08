'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "track-stop-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type TrackStopPagesProps = FoundationProps;
/** 二本の線路へ実ページの停車床を並べ、現在の駅だけを中空のアーチへ納めるページ送り。無地の青い番号列を廃止し、72pxの駅の段、10pxの停車床、二本の連続した路線と64pxの現在駅のアーチへ組み直す。番号とnative hitは固定し、前後の実操作も同じ路線の受面へ揃える。 */
export default forwardRef<HTMLDivElement, TrackStopPagesProps>(function TrackStopPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
