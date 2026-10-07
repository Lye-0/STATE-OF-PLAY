'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as RibbonScoreRatingProps };
/** 帯の五片が選択した尺度をつなぐ。 */
export default function RibbonScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="ribbon-score-rating" />;
}
