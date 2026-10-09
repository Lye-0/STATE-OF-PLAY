'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as RibbonScoreRatingProps };
/** 五つの星を一本の帯で結ぶ評価入力。端と継ぎ目を薄くし、狭い画面でも帯を途中で折り返さない。 */
export default function RibbonScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="ribbon-score-rating" />;
}
