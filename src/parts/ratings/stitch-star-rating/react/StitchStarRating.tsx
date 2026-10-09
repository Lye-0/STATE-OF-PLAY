'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as StitchStarRatingProps };
/** 縦の織帯と横の織帯が本当に交差する評価。細い縦罫と色付きの小箱を廃し、34pxの縦の帯と40pxの連続する横の帯を重ねる。帯の上下には空気が通る本当の隙間があり、星は布同士の交点の平面へ固定する。評価範囲は横帯の密度、確定位置は縦帯の返り端で読む。 */
export default function StitchStarRating(props: RatingProps) {
  return <RatingView {...props} skin="stitch-star-rating" />;
}
