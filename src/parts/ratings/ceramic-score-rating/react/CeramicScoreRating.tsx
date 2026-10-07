'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as CeramicScoreRatingProps };
/** 陶器の小さなプレートで採点。 */
export default function CeramicScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="ceramic-score-rating" />;
}
