'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as FlagScoreRatingProps };
/** 旗の五段階を一つの列に保つ評価入力。旗と支柱の寸法を揃えて縮め、最後の段階を下段へ分離しない。 */
export default function FlagScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="flag-score-rating" />;
}
