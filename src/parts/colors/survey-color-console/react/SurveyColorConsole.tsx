'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as SurveyColorConsoleProps };
/** 測色盤の色面と数値軸を別の操作区画に置く。元の横2区画と狭幅で上下に戻る配置を保ち、暗い多重枠を一素材の10pxの上端/16pxの下端へ揃える。左は実色面、右はnative44pxの色相/彩度/明度軸へ読み、補助文字も12pxで示す。狭幅で軸を隠さず、一列へ戻す。 */
export default function SurveyColorConsole(props: ColorProps) {
  return <ColorView {...props} skin="survey-color-console" />;
}
