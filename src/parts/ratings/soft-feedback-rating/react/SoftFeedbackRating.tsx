'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as SoftFeedbackRatingProps };
/** 柔らかな面に星を並べる。 */
export default function SoftFeedbackRating(props: RatingProps) {
  return <RatingView {...props} skin="soft-feedback-rating" />;
}
