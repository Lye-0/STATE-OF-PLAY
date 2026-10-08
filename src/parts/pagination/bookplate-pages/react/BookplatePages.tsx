'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "bookplate-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type BookplatePagesProps = FoundationProps;
/** 一枚の書票の読む面へ実索引をまとめ、重い二重の番号枠を取り除くページ送り。元の紙票の精度を保持し、左右7pxの貼り代、18pxの隅の留め、細い一線の紙端へ線量を絞る。番号は紙の内面へ置き、現在だけが同じ票へ濃く印刷される。前後の実操作にも一線の紙端だけを残す。 */
export default forwardRef<HTMLDivElement, BookplatePagesProps>(function BookplatePages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
