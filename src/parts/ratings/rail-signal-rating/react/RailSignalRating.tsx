'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as RailSignalRatingProps };
/** レール上の評価信号。五つの表示面を一列につなぎ、入力した数だけ下のレールを点灯する。 */
export default function RailSignalRating(props: RatingProps) {
  return <RatingView {...props} skin="rail-signal-rating" />;
}
