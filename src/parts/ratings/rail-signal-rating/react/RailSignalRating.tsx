'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as RailSignalRatingProps };
/** 線路の信号灯を順に灯す。 */
export default function RailSignalRating(props: RatingProps) {
  return <RatingView {...props} skin="rail-signal-rating" />;
}
