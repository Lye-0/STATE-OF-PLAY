'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as CrescentScoreRatingProps };
/** 開いた月の形が、評価の段を軽やかに重ねる。 */
export default function CrescentScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="crescent-score-rating" />;
}
