'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "spine-index-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12
};
export type SpineIndexPagesProps = FoundationProps;
/** 本の小口へ指をかけるページ札。狭幅でも一枚の幅を保ち、選択した札だけを背へ留める。 */
export default forwardRef<HTMLDivElement, SpineIndexPagesProps>(function SpineIndexPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
