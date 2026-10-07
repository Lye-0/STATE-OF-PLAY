'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as CoinValueRatingProps };
/** コインを重ねるように評価する。 */
export default function CoinValueRating(props: RatingProps) {
  return <RatingView {...props} skin="coin-value-rating" />;
}
