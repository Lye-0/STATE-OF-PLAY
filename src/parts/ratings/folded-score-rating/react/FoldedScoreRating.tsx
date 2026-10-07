'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as FoldedScoreRatingProps };
/** 折り札の五つの面が起き上がる。 */
export default function FoldedScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="folded-score-rating" />;
}
