'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "lgc-pagination-mist",
  "kind": "pagination",
  "variant": "soft",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12
};
export type LgcPaginationMistProps = FoundationProps;
/** Mist Pages: Bタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, LgcPaginationMistProps>(function LgcPaginationMist(props, ref) {
  return <FoundationWidget {...props} className={`lgc-root ${props.className??''}`} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
