'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as OrbitalRatingProps };
/** 透明な球を巡る環が、選択すると平面から立体へ起き上がる。 */
export default function OrbitalRating(props: RatingProps) {
  return <RatingView {...props} skin="orbital-rating" />;
}
