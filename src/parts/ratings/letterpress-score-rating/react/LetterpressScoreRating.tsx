'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as LetterpressScoreRatingProps };
/** 活版の評価票。星を押すための五つの区画を二重罫で揃え、選択数が塗りと数値で一致する。 */
export default function LetterpressScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="letterpress-score-rating" />;
}
