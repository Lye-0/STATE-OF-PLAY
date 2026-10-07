'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as LetterpressScoreRatingProps };
/** 五つの活版の印を水平に押す。 */
export default function LetterpressScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="letterpress-score-rating" />;
}
