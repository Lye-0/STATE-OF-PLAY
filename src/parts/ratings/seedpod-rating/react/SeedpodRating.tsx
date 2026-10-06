'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as SeedpodRatingProps };
/** 細い種の房を、軽い五段階の評価として並べる。 */
export default function SeedpodRating(props: RatingProps) {
  return <RatingView {...props} skin="seedpod-rating" />;
}
