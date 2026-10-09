'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as FoldedScoreRatingProps };
/** 一本の桁に折った札を吊るす評価入力。五段階を同じ行へ保ち、狭幅でも桁と札を分断しない。 */
export default function FoldedScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="folded-score-rating" />;
}
