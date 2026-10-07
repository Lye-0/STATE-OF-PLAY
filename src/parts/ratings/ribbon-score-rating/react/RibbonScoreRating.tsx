'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as RibbonScoreRatingProps };
/** 帯の上に星を縫い留める。 */
export default function RibbonScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="ribbon-score-rating" />;
}
