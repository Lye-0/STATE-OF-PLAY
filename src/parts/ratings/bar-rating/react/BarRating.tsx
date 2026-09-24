'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as BarRatingProps };
/** 細いバーがつながる、軽量な評価。 */
export default function BarRating(props: RatingProps) {
  return <RatingView {...props} skin="bar-rating" />;
}
