'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as RailSignalRatingProps };
/** 五つの信号座が下から満ちる。 */
export default function RailSignalRating(props: RatingProps) {
  return <RatingView {...props} skin="rail-signal-rating" />;
}
