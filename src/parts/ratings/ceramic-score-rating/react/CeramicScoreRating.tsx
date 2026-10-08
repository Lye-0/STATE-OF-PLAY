'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as CeramicScoreRatingProps };
/** 磁器の小皿による評価。五つの皿の内側に星を置き、選んだ数だけ浅い釉薬の色を加える。 */
export default function CeramicScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="ceramic-score-rating" />;
}
