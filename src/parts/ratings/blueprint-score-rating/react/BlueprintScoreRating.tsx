'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as BlueprintScoreRatingProps };
/** 設計図の注記枠で段階を読む。 */
export default function BlueprintScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="blueprint-score-rating" />;
}
