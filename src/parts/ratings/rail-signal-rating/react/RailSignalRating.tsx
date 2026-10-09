'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as RailSignalRatingProps };
/** 実際の星を掲げる信号面を、連続するレールへ載せる評価。星の板とレールの主形を保ち、10pxの支柱を星面の下12pxへ入れ、14pxのレールへ5px入れる。星の後の支柱と足元の一つのレールで上下の接続を明確にし、複数行でも各行が独立して完成する。選択範囲は信号面の密度で示す。 */
export default function RailSignalRating(props: RatingProps) {
  return <RatingView {...props} skin="rail-signal-rating" />;
}
