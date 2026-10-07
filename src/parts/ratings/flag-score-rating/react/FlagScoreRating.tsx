'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as FlagScoreRatingProps };
/** 旗の先端を使った評価札。 */
export default function FlagScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="flag-score-rating" />;
}
