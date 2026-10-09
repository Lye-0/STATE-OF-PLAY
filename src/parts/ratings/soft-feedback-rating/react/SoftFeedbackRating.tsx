'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as SoftFeedbackRatingProps };
/** 穏やかな角丸の評価を、実用的な固定した星と押面へ揃える。Bとして奇抜な外形を増やさず、淡い藤色の面、読みやすい14pxの見出し、64pxのnative押面を保つ。選択範囲と確定位置は面と縁の密度で区別し、hoverは確定せず、同じフォームへ実評価だけを送る。 */
export default function SoftFeedbackRating(props: RatingProps) {
  return <RatingView {...props} skin="soft-feedback-rating" />;
}
