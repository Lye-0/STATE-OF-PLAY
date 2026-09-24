'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as FilamentRatingProps };
/** 暗いガラスの下で電極が点灯し、評価を光の高さで示す。 */
export default function FilamentRating(props: RatingProps) {
  return <RatingView {...props} skin="filament-rating" />;
}
