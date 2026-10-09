'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as WarmReaderRatingProps };
/** 本文に馴染む暖色の評価入力。星を同じ行に並べ、五段階のつながりを保つ。 */
export default function WarmReaderRating(props: RatingProps) {
  return <RatingView {...props} skin="warm-reader-rating" />;
}
