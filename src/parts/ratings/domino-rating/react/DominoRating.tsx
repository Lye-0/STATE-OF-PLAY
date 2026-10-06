'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as DominoRatingProps };
/** 小さなドミノの目と番号を、触れやすい五つの評価面にする。 */
export default function DominoRating(props: RatingProps) {
  return <RatingView {...props} skin="domino-rating" />;
}
