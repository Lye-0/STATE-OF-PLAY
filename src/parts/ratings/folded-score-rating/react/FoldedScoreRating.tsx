'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as FoldedScoreRatingProps };
/** 折り返した札が評価を示す。 */
export default function FoldedScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="folded-score-rating" />;
}
