'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as WarmReaderRatingProps };
/** 読書の評価に合う穏やかな星。 */
export default function WarmReaderRating(props: RatingProps) {
  return <RatingView {...props} skin="warm-reader-rating" />;
}
