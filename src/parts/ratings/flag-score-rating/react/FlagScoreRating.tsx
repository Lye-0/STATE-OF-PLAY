'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as FlagScoreRatingProps };
/** 小さな評価旗を五つ並べる。選択済みの星は同じ高さのまま、旗の下端だけを伸ばす。 */
export default function FlagScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="flag-score-rating" />;
}
