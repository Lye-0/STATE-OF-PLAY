'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as CeramicScoreRatingProps };
/** 一枚の反った陶の面に五つの星を並べる評価入力。裾と縁を小さくし、選択範囲を一列で読めるようにする。 */
export default function CeramicScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="ceramic-score-rating" />;
}
