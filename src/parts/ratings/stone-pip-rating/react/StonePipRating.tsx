'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as StonePipRatingProps };
/** 石の点が選んだ尺度まで沈む。 */
export default function StonePipRating(props: RatingProps) {
  return <RatingView {...props} skin="stone-pip-rating" />;
}
