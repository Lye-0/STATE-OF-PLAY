'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as RailSignalRatingProps };
/** 一本のレールに五つの信号を立てる評価入力。狭幅でも柱と線を分割せず、一つの尺度として見せる。 */
export default function RailSignalRating(props: RatingProps) {
  return <RatingView {...props} skin="rail-signal-rating" />;
}
