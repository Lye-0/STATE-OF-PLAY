'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as OutlineStarRatingProps };
/** 選んだ星の輪郭だけを強める。 */
export default function OutlineStarRating(props: RatingProps) {
  return <RatingView {...props} skin="outline-star-rating" />;
}
