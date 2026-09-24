'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as ResonantRatingProps };
/** 高さの違う五本の金属キーが、選択に応じて持ち上がる。 */
export default function ResonantRating(props: RatingProps) {
  return <RatingView {...props} skin="resonant-rating" />;
}
