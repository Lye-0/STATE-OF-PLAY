'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as StitchStarRatingProps };
/** 星を布の小さな区画に収める。 */
export default function StitchStarRating(props: RatingProps) {
  return <RatingView {...props} skin="stitch-star-rating" />;
}
