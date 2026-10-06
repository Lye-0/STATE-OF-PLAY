'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as CrossbarScoreRatingProps };
/** 小さな横桟を選び、幅広い番号の上で評価を固定する。 */
export default function CrossbarScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="crossbar-score-rating" />;
}
