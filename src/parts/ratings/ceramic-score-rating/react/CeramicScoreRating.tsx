'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as CeramicScoreRatingProps };
/** 陶器の凹みへ評価の面を収める。 */
export default function CeramicScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="ceramic-score-rating" />;
}
