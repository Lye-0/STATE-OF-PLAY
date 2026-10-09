'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as InspectionScoreRatingProps };
/** 五つの検査札を連続した台へ載せる評価入力。台と札の厚みを縮尺に合わせ、狭幅でも同じ五段階として読める。 */
export default function InspectionScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="inspection-score-rating" />;
}
