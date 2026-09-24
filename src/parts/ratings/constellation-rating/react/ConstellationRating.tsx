'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as ConstellationRatingProps };
/** 星の点と細い経路が連なり、五つの段階を一つの星座にする。 */
export default function ConstellationRating(props: RatingProps) {
  return <RatingView {...props} skin="constellation-rating" />;
}
