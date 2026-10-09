'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as BlueprintScoreRatingProps };
/** 三方に折れた小さな翼が星の接合面を支える評価入力。翼を星より前へ出しすぎず、五段階を一列で読み取れる寸法にする。 */
export default function BlueprintScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="blueprint-score-rating" />;
}
