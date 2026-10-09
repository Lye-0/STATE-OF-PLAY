'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as FlagScoreRatingProps };
/** 実際の評価旗が支柱から自由端へ開く評価。普通の四角い星セルを廃し、8pxの実支柱と28pxの足へ接続した一枚の旗を作る。旗の始点は支柱へ4px入り、終端は13pxの二股へ切り開く。星は旗の読む平面へ固定し、布の返りと選択範囲の密度で値を示す。RTLでも支柱と自由端だけを鏡映し、操作順と表示値は保つ。 */
export default function FlagScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="flag-score-rating" />;
}
