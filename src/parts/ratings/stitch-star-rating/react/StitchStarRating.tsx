'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as StitchStarRatingProps };
/** 縫った星の中に選択面が広がる。 */
export default function StitchStarRating(props: RatingProps) {
  return <RatingView {...props} skin="stitch-star-rating" />;
}
