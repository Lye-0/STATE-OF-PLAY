'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as NotchedDiscRatingProps };
/** 上下に位置決めの切り欠きを持つ評価ディスク。丸い金の印から角のある部品へ組み替え、選択した位置を濃い輪郭で示す。 */
export default function NotchedDiscRating(props: RatingProps) {
  return <RatingView {...props} skin="notched-disc-rating" />;
}
