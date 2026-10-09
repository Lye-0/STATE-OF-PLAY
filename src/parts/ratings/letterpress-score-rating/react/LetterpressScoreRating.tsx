'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as LetterpressScoreRatingProps };
/** 五つの活字札を一列に並べる評価入力。縁の厚さと札の幅を整え、狭幅でも五段階を同時に見渡せる。 */
export default function LetterpressScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="letterpress-score-rating" />;
}
