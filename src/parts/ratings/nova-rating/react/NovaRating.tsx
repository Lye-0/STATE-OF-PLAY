'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as NovaRatingProps };
/** 折られた星が、評価を重ねるたびに面を開く。 */
export default function NovaRating(props: RatingProps) {
  return <RatingView {...props} skin="nova-rating" />;
}
