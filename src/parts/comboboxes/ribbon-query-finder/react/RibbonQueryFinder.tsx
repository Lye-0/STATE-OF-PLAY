'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderCombobox, mountCombobox} from '../../../../shared/foundation/combobox';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "ribbon-query-finder",
  "kind": "comboboxes",
  "variant": "essential",
  "label": "次の素材を見つける",
  "description": "",
  "defaultValue": "",
  "multiple": false,
  "placeholder": "名前や素材を入力…",
  "items": [
    {
      "value": "aurora",
      "label": "Aurora",
      "description": "光と透明感のコレクション",
      "badge": "GLASS",
      "icon": "spark"
    },
    {
      "value": "folio",
      "label": "Folio",
      "description": "紙と余白のコレクション",
      "badge": "PAPER",
      "icon": "file"
    },
    {
      "value": "mercury",
      "label": "Mercury",
      "description": "金属と精密さのコレクション",
      "badge": "METAL",
      "icon": "clock"
    },
    {
      "value": "quiet",
      "label": "Quiet",
      "description": "落ち着いた日常のデザイン",
      "badge": "ESSENTIAL",
      "icon": "info"
    },
    {
      "value": "archive",
      "label": "Archive",
      "description": "近日公開",
      "badge": "SOON",
      "disabled": true,
      "icon": "file"
    }
  ]
};
export type RibbonQueryFinderProps = FoundationProps;
/** 候補そのものを、両端が割れて裏へ返る幅広いリボンとして展開する入力。右の紫の札を廃止し、全幅の上下4pxの織縁と、両端の14pxの割尾、後ろへ10px返る同じ帯を作る。種別文字は読む帯の面へ置き、activeでも形と文字を動かさない。 */
export default forwardRef<HTMLDivElement, RibbonQueryFinderProps>(function RibbonQueryFinder(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderCombobox} mountContent={mountCombobox}/>;
});
