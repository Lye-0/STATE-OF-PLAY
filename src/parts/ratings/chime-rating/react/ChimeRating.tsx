'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as ChimeRatingProps };
/** 長さの違う細い鈴を並べ、評価の高さを選んだ鈴で読む。 */
export default function ChimeRating(props: RatingProps) {
  return <RatingView {...props} skin="chime-rating" />;
}
