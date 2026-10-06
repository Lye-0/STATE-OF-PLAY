'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as SegmentedSealRatingProps };
/** 区切りのある四角い印が、評価の値をひとつずつ押し留める。 */
export default function SegmentedSealRating(props: RatingProps) {
  return <RatingView {...props} skin="segmented-seal-rating" />;
}
