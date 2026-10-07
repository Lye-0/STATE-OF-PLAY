'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as CompactScoreRatingProps };
/** 小さな一覧向けの採点欄。 */
export default function CompactScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="compact-score-rating" />;
}
