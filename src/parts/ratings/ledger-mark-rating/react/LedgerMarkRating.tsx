'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as LedgerMarkRatingProps };
/** 同じ一つの根元から開いた実紙葉を、自由端で選ぶ帳簿の評価。縦綴じの横へ並べた矩形セルを廃し、全葉の実根元を同じ下の28×42pxの綴じへ集め、84×50pxの自由端を56pxずつ離して露出する。星と01〜最大10の実順位は各自由端の同じ平面で読む。紙だけが共通の根元へ長く戻り、nativeラジオの行と印は固定する。色の反復ではなく、一冊の開いた葉/根元/露出した読む端で形を作る。 */
export default function LedgerMarkRating(props: RatingProps) {
  return <RatingView {...props} skin="ledger-mark-rating" />;
}
