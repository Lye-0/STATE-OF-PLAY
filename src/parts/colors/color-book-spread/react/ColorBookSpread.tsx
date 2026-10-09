'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as ColorBookSpreadProps };
/** 見本と実軸を、一つの開いた色見本帳の両ページで編集する。二つの普通のカードを廃し、中央の28pxの露出した綴じと40pxの空隙を挟む見本紙/数値紙へ組む。左の色面と保存色、右のnative軸とHEXはそれぞれ同じ紙へ読み、紙の下10pxの束と綴じ端が一つの帳面を示す。狭幅では同じ綴じを横へ残して一列にする。 */
export default function ColorBookSpread(props: ColorProps) {
  return <ColorView {...props} skin="color-book-spread" />;
}
