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
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type SpineIndexPagesProps = FoundationProps;
/** 露出した厚い背から、実表示ページごとの索引葉を斜めの紙根で開くページ送り。横の番号札を廃止し、実表示ページを40pxの縦の紙葉へ並べ、18pxの曲面の背と24pxの斜めの根元を連続させる。ページ番号は葉の読む面へ固定し、実前後操作はその下の左右から動かさない。省略記号は紙葉に見立てず余白へ置く。 */
export default forwardRef<HTMLDivElement, SpineIndexPagesProps>(function SpineIndexPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
