'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as HeartRatingProps };
/** 柔らかなハートで伝える評価。 */
export default function HeartRating(props: RatingProps) {
  return <RatingView {...props} skin="heart-rating" />;
}
