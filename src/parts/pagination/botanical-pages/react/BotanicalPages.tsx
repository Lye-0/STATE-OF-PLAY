'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/sequence/pagination';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "botanical-pages",
  "kind": "pagination",
  "variant": "botanical",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12
};
export type BotanicalPagesProps = FoundationProps;
/** Botanical Pages: Aタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, BotanicalPagesProps>(function BotanicalPages(props, ref) {
  return <FoundationWidget {...props} className={`sop-sequence ${props.className??''}`} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
