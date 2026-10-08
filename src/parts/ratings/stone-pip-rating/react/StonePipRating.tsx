'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as StonePipRatingProps };
/** 石の浅い評価片。五つの同じくぼみを並べ、選んだ数だけ内面の星を濃くする。 */
export default function StonePipRating(props: RatingProps) {
  return <RatingView {...props} skin="stone-pip-rating" />;
}
