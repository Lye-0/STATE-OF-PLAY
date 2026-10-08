'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "shuttle-key-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type ShuttleKeyPagesProps = FoundationProps;
/** 丸い端のシャトルの左右を、実索引を渡る連続した軌道へ接続するページ送り。元の丸い前後端を保持し、別々の番号箱を廃止する。8pxの上下レールと丸い端、各実行の中央を渡る通しの路線へ番号の舟形を載せ、現在だけが同じ舟の材で変わる。 */
export default forwardRef<HTMLDivElement, ShuttleKeyPagesProps>(function ShuttleKeyPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
