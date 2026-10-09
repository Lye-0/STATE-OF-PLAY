'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as PigmentCabinetProps };
/** 色面だけを実トレーへ引き出し、保存色を引出し群へ収納する顔料台。外四辺の色箱を廃し、数値軸を後方の別道具面、SVを左右14pxのスライドへ入る160pxの前の編集面へ分離する。SVの下へ続く44pxの実前面には72×14pxの本当の把手穴が開き、台を透かして見られる。保存色は実色と実HEXが一致する66pxの引出し、HEX入力は台の外の固定面へ置く。狭幅で実HEX全7文字を読める全幅行へ分ける。 */
export default function PigmentCabinet(props: ColorProps) {
  return <ColorView {...props} skin="pigment-cabinet" />;
}
