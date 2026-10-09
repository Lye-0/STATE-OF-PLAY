'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as NotchedDiscRatingProps };
/** 面取りした同じ円盤の縁で評価を読む。元の円盤と星を保ち、独立した点や下線を除去する。四隅の12pxの切欠き、5pxの上端と7pxの下端を持つ押面は、未選択でも同じ大きさを保つ。選択範囲は金属面の密度、確定位置は縁の太さで示し、星とnative押面は動かない。 */
export default function NotchedDiscRating(props: RatingProps) {
  return <RatingView {...props} skin="notched-disc-rating" />;
}
