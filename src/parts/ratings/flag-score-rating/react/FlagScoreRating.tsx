'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as FlagScoreRatingProps };
/** 評価札の旗が下辺から開く。 */
export default function FlagScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="flag-score-rating" />;
}
