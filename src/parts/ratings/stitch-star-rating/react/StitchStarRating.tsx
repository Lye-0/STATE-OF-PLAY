'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as StitchStarRatingProps };
/** 五つの留め帯へ横の布を通した評価入力。狭幅で帯を折り返さず、選択した星までの連続性を保つ。 */
export default function StitchStarRating(props: RatingProps) {
  return <RatingView {...props} skin="stitch-star-rating" />;
}
