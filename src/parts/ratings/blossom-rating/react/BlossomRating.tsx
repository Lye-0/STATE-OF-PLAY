'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as BlossomRatingProps };
/** 一つずつの蕾がほどけ、評価の分だけ花が咲く。 */
export default function BlossomRating(props: RatingProps) {
  return <RatingView {...props} skin="blossom-rating" />;
}
