'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as NotchedDiscRatingProps };
/** 切欠きのある評価ディスク。星のある円盤の下の縁だけを回転させ、五段階の同寸を守る。 */
export default function NotchedDiscRating(props: RatingProps) {
  return <RatingView {...props} skin="notched-disc-rating" />;
}
