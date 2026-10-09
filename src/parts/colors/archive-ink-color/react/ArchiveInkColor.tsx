'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as ArchiveInkColorProps };
/** 保存色を実インク瓶として収蔵する色資料室。72×112pxのnative瓶に22pxの首と広い色の胴を持たせ、実HEXを白い収蔵ラベルへ記す。選ぶ色と瓶の胴色は同じ値で、架空の裏瓶や文字を作らない。SVは上の色見本、HSV/HEXは平らな道具面へ置く。瓶の有効中心を44px以上確保し、選択とfocusは移動せず内側の線で示す。 */
export default function ArchiveInkColor(props: ColorProps) {
  return <ColorView {...props} skin="archive-ink-color" />;
}
