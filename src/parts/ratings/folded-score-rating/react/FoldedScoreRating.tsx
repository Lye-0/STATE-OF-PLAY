'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as FoldedScoreRatingProps };
/** 折り畳んだ評価票。星を載せる面は動かさず、選択した票の下の折り返しだけを展開する。 */
export default function FoldedScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="folded-score-rating" />;
}
