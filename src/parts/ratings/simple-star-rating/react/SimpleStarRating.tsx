'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as SimpleStarRatingProps };
/** 読みやすい、定番の五つ星。 */
export default function SimpleStarRating(props: RatingProps) {
  return <RatingView {...props} skin="simple-star-rating" />;
}
