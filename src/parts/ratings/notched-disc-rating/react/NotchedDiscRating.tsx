'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as NotchedDiscRatingProps };
/** 切欠いた円盤が開口部を回す。 */
export default function NotchedDiscRating(props: RatingProps) {
  return <RatingView {...props} skin="notched-disc-rating" />;
}
