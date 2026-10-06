'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as WedgeScaleRatingProps };
/** 傾きの違う小さな楔が、選択された段まで明るくつながる。 */
export default function WedgeScaleRating(props: RatingProps) {
  return <RatingView {...props} skin="wedge-scale-rating" />;
}
