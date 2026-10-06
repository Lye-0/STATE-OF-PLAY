'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as KeycapRatingProps };
/** 五つの低いキーを押し込み、選んだ評価を手元の操作として示す。 */
export default function KeycapRating(props: RatingProps) {
  return <RatingView {...props} skin="keycap-rating" />;
}
