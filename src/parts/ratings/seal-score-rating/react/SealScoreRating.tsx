'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as SealScoreRatingProps };
/** 封蝋の印で五段階を評価。星の大きさは全段階で同じにし、選択数だけ印の面を満たす。 */
export default function SealScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="seal-score-rating" />;
}
