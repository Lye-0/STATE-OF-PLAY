'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as DotRatingProps };
/** 小さな点で、静かに評価する。 */
export default function DotRating(props: RatingProps) {
  return <RatingView {...props} skin="dot-rating" />;
}
