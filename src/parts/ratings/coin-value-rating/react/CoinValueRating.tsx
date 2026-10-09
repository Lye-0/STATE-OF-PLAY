'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as CoinValueRatingProps };
/** 駒形の評価札を五つ一列に並べる入力。幅に合わせて札と縁を縮め、最後の札だけが落ちる配置をなくす。 */
export default function CoinValueRating(props: RatingProps) {
  return <RatingView {...props} skin="coin-value-rating" />;
}
