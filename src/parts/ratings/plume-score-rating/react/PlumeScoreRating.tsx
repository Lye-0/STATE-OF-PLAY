'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as PlumeScoreRatingProps };
/** 細い羽根の軸と枝が、選択した段まで順に立ち上がる。 */
export default function PlumeScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="plume-score-rating" />;
}
