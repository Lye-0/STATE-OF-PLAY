'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as LetterpressScoreRatingProps };
/** 活字の数字で評価を選ぶ。 */
export default function LetterpressScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="letterpress-score-rating" />;
}
