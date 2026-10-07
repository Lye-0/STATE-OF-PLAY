'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as OpenBracketRatingProps };
/** 評価段階を小さな括弧で囲む。 */
export default function OpenBracketRating(props: RatingProps) {
  return <RatingView {...props} skin="open-bracket-rating" />;
}
