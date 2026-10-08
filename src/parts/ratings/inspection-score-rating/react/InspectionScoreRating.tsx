'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as InspectionScoreRatingProps };
/** 検査の五つの窓。各窓に同じ星を置き、評価した範囲だけ下の表示線がつながる。 */
export default function InspectionScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="inspection-score-rating" />;
}
