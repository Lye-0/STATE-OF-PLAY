'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as SoftFeedbackRatingProps };
/** 柔らかい輪郭の評価キー。五段階を一列に保ち、狭幅でも値と選択位置をすぐに読み取れる。 */
export default function SoftFeedbackRating(props: RatingProps) {
  return <RatingView {...props} skin="soft-feedback-rating" />;
}
