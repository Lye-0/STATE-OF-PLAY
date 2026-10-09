'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as CoinValueRatingProps };
/** 五角形の鋳造コインの面で評価を読む。元の五角形を保持し、7pxの上の切断面と9pxの下の厚みを同じ金属へ揃える。選択範囲はコイン面の密度、確定位置は内側の縁へ示し、下に余分な点を加えない。星とnativeの当たりは全段階で同じ寸法を保つ。 */
export default function CoinValueRating(props: RatingProps) {
  return <RatingView {...props} skin="coin-value-rating" />;
}
