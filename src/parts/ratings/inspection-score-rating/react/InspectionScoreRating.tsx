'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as InspectionScoreRatingProps };
/** 計器の小窓に評価値を並べる。 */
export default function InspectionScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="inspection-score-rating" />;
}
