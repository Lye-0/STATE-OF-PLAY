'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as OpenBracketRatingProps };
/** 細い括弧で五つの星札を留める評価入力。留具を小さくし、星の尺度と選択位置を先に読める構成にする。 */
export default function OpenBracketRating(props: RatingProps) {
  return <RatingView {...props} skin="open-bracket-rating" />;
}
