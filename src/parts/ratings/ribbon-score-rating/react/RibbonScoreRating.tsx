'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as RibbonScoreRatingProps };
/** 帯を通した評価札。星の後ろの細い帯が選択数だけ続き、各評価点の位置を保つ。 */
export default function RibbonScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="ribbon-score-rating" />;
}
