'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderPagination, mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "console-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export type ConsolePagesProps = FoundationProps;
/** 成形された操作卓へ、実表示ページごとのキーと前後の二本のレバーを取り付けるページ送り。青い番号面と濃い矩形矢印を廃止し、18pxの切った肩と12/10/16pxの筐体小口、三面の実番号キー、64pxの実前後レバーと中空の軸受へ作り直す。数字と矢印は静止し、現在キーの実色だけが変わる。 */
export default forwardRef<HTMLDivElement, ConsolePagesProps>(function ConsolePages(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderPagination} mountContent={mountPagination}/>;
});
