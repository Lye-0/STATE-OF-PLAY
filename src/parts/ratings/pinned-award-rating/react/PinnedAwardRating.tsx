'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as PinnedAwardRatingProps };
/** 四角い評価章と細い足を組み合わせ、選んだ章を明るく留める。 */
export default function PinnedAwardRating(props: RatingProps) {
  return <RatingView {...props} skin="pinned-award-rating" />;
}
