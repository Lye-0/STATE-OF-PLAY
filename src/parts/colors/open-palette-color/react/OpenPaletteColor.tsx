'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as OpenPaletteColorProps };
/** 実色面と本当の手掛け穴を持つ、一枚の開いた絵具板で色を編集する。L字の細線と底線を廃し、右へ64px広がる非対称の絵具板と半径18pxの実穴を主形にする。数値軸を板より上へ分離し、SVは板の無変形の矩形面で編集し、穴と曲がる外端は入力領域の外に置く。保存色は同じ板の下部へ並ぶ48pxの実絵具面、HSVとHEXは板の外の別の道具面へ分ける。暗緑で全面を埋めず、選ぶ色と板の空隙を主役にする。 */
export default function OpenPaletteColor(props: ColorProps) {
  return <ColorView {...props} skin="open-palette-color" />;
}
