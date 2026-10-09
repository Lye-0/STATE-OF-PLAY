'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as RibbonSwatchColorProps };
/** 実保存色を、上下一続きの蛇腹の色見本帯へ変える。四辺の額縁と矩形の外箱を廃し、112pxの色面を18px重ね、右下がりと右上がりの共有折線で次の面へ切れ目なく接続する。帯の最初と最後の斜端は本当の展示背景へ抜ける自由端。実HEXは無変形の面の中央へ固定し、選択はラベルの明暗だけで示す。色の面もnative当たりもhoverや値変更で移動しない。 */
export default function RibbonSwatchColor(props: ColorProps) {
  return <ColorView {...props} skin="ribbon-swatch-color" />;
}
