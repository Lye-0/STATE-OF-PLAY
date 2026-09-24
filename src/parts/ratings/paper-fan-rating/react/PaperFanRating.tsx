'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as PaperFanRatingProps };
/** 紙の小片が扇のように開き、評価の数を形にする。 */
export default function PaperFanRating(props: RatingProps) {
  return <RatingView {...props} skin="paper-fan-rating" />;
}
