'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as CoinValueRatingProps };
/** 貨幣の表面が評価の個数だけ現れる。 */
export default function CoinValueRating(props: RatingProps) {
  return <RatingView {...props} skin="coin-value-rating" />;
}
