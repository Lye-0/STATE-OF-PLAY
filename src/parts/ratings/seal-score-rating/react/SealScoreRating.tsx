'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as SealScoreRatingProps };
/** 小さな印章が評価を受け止める。 */
export default function SealScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="seal-score-rating" />;
}
