'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as WarmReaderRatingProps };
/** 暖色の読みやすい評価を、広いnative押面と明確な確定位置へ揃える。Bとして淡い紙色と小さな角丸を保持し、14pxの見出し、固定した28pxの星と64pxの実ラジオを作る。確定した位置には面の下端を使い、範囲の塗りと区別する。長文、10段階、未評価、読取専用にも同じ安定した寸法を保つ。 */
export default function WarmReaderRating(props: RatingProps) {
  return <RatingView {...props} skin="warm-reader-rating" />;
}
