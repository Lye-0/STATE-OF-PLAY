'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as SealScoreRatingProps };
/** 検印が評価数まで順に刻まれる。 */
export default function SealScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="seal-score-rating" />;
}
