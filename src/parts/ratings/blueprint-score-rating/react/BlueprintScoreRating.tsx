'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as BlueprintScoreRatingProps };
/** 設計図の照準が評価欄に合う。 */
export default function BlueprintScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="blueprint-score-rating" />;
}
