'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBadges, mountBadges} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "bookbinding-tags",
  "kind": "badges",
  "variant": "essential",
  "label": "小さな情報に、個性を。",
  "description": "",
  "defaultValue": [
    "ready"
  ],
  "selectable": true,
  "removable": false,
  "items": [
    {
      "value": "design",
      "label": "Design",
      "badge": "8",
      "icon": "spark"
    },
    {
      "value": "motion",
      "label": "Motion",
      "badge": "4",
      "icon": "clock"
    },
    {
      "value": "ready",
      "label": "Ready",
      "icon": "check"
    },
    {
      "value": "review",
      "label": "Review",
      "icon": "info"
    }
  ]
};
export type BookbindingTagsProps = FoundationProps;
/** 各実タグの読む表紙と裏の紙葉を、一筆の露出した綴糸で結ぶ。片丸札の小さな製本記号を廃し、表紙と8pxの裏紙の間に10pxの真の空隙を作る。幅16pxのC形の糸が一つの表紙孔から外へ回り、空隙を越えて裏紙の孔へ戻る。孔の端29pxに対し全文・アイコンは40px内側へ確保する。糸を小さい記号として貼らず、二つの読む素材の連結が札の外形を決める。狭い表示では名称を全幅の上段へ、実件数と削除を下段へ分け、長い名称の読む幅を保つ。 */
export default forwardRef<HTMLDivElement, BookbindingTagsProps>(function BookbindingTags(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
