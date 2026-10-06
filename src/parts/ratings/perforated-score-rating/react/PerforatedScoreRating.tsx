'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as PerforatedScoreRatingProps };
/** 一枚ずつ区切った小さな評価札を、選んだ段まで濃く残す。 */
export default function PerforatedScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="perforated-score-rating" />;
}
