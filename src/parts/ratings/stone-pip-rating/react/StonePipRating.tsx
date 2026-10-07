'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as StonePipRatingProps };
/** 小さな石の点で段階を示す。 */
export default function StonePipRating(props: RatingProps) {
  return <RatingView {...props} skin="stone-pip-rating" />;
}
