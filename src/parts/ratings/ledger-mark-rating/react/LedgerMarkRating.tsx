'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as LedgerMarkRatingProps };
/** 帳簿の採点欄。五つの同寸の記入欄に星を置き、罫線と数字で評価の順序を明確にする。 */
export default function LedgerMarkRating(props: RatingProps) {
  return <RatingView {...props} skin="ledger-mark-rating" />;
}
