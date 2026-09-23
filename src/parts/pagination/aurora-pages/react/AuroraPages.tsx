'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/sequence/pagination';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "aurora-pages",
  "kind": "pagination",
  "variant": "aurora",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12
};
export type AuroraPagesProps = FoundationProps;
/** Aurora Pages: Aタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, AuroraPagesProps>(function AuroraPages(props, ref) {
  return <FoundationWidget {...props} className={`sop-sequence ${props.className??''}`} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
