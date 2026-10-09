'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as SealScoreRatingProps };
/** 五つの封印を一列に並べる評価入力。狭幅では印の寸法を揃えて縮め、最後の段階を別行へ分離しない。 */
export default function SealScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="seal-score-rating" />;
}
