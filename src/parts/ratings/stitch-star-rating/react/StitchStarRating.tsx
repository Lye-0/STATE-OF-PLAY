'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as StitchStarRatingProps };
/** 縫い込んだ五つの星。各星の下の布片を同寸で並べ、選択された布の縫い目を濃くする。 */
export default function StitchStarRating(props: RatingProps) {
  return <RatingView {...props} skin="stitch-star-rating" />;
}
