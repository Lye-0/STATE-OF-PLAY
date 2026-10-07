'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as LedgerMarkRatingProps };
/** 台帳の罫線上に採点する。 */
export default function LedgerMarkRating(props: RatingProps) {
  return <RatingView {...props} skin="ledger-mark-rating" />;
}
