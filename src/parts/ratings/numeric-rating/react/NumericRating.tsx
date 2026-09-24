'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as NumericRatingProps };
/** 数字をそのまま選べる、明快な評価。 */
export default function NumericRating(props: RatingProps) {
  return <RatingView {...props} skin="numeric-rating" />;
}
