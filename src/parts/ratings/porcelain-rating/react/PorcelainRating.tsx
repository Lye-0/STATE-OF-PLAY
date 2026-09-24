'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as PorcelainRatingProps };
/** 白い磁器の粒が押し込まれ、評価した分だけ輪郭が染まる。 */
export default function PorcelainRating(props: RatingProps) {
  return <RatingView {...props} skin="porcelain-rating" />;
}
