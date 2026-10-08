'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "open-bracket-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type OpenBracketPagesProps = FoundationProps;
/** 高さを48pxずらした二つの開いた支持括弧が、一枚の実索引紙の上下を互い違いに受けるページ送り。34px幅/12px厚の曲げ材の両端が、26px内側にある読む紙へ各8px重なる。左上と右下が別の高さで受け、閉じた外枠を作らない。紙とnative番号は固定し、RTLでは曲げ材全体を一度だけ鏡映して内向きの受けを保つ。 */
export default forwardRef<HTMLDivElement, OpenBracketPagesProps>(function OpenBracketPages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
