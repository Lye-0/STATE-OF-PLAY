'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as NumberChoiceRatingProps };
/** 数字で段階を明快に選択する。 */
export default function NumberChoiceRating(props: RatingProps) {
  return <RatingView {...props} skin="number-choice-rating" />;
}
