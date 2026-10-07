'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as InspectionScoreRatingProps };
/** 検査窓の五つのシャッターが開く。 */
export default function InspectionScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="inspection-score-rating" />;
}
