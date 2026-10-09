'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as RibbonScoreRatingProps };
/** 一本の織った帯の読む面に星を置く評価。元の帯と星を保持し、小さな丸い星箱と細い接続線を同じ幅の連続する面へ揃える。7pxの上端と10pxの下の返りを保ち、先頭と末尾のみ巻いた終端を作る。実際の確定位置は帯の上端の密度で示し、星とnative当たりを動かさない。 */
export default function RibbonScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="ribbon-score-rating" />;
}
