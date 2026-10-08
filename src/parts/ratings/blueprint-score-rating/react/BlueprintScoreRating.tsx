'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as BlueprintScoreRatingProps };
/** 採点の計測表。五つの星を同じ格子へ揃え、選択された範囲の薄い面と線を強める。 */
export default function BlueprintScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="blueprint-score-rating" />;
}
