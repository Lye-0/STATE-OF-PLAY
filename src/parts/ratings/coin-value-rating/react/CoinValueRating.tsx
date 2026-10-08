'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as CoinValueRatingProps };
/** 五枚の評価コイン。星の入った表面を固定し、選択済みのコインだけ外縁に厚みを付ける。 */
export default function CoinValueRating(props: RatingProps) {
  return <RatingView {...props} skin="coin-value-rating" />;
}
