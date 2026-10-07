'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as PlainReviewRatingProps };
/** レビューで読み慣れた星の評価。 */
export default function PlainReviewRating(props: RatingProps) {
  return <RatingView {...props} skin="plain-review-rating" />;
}
