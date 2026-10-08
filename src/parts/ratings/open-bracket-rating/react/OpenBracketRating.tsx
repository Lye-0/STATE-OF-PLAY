'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as OpenBracketRatingProps };
/** 角括弧に収める五つ星。外周の装飾を抑え、星と選択範囲の下線を主役にする。 */
export default function OpenBracketRating(props: RatingProps) {
  return <RatingView {...props} skin="open-bracket-rating" />;
}
