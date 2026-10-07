'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as OpenBracketRatingProps };
/** 上下の括弧が選択済みの数を挟む。 */
export default function OpenBracketRating(props: RatingProps) {
  return <RatingView {...props} skin="open-bracket-rating" />;
}
