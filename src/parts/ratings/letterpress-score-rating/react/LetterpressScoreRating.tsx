'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as LetterpressScoreRatingProps };
/** 星の活字を一つの厚い印刷版へ押す評価。元の四角い版と星を保持し、7pxの上端/10pxの下端/左右4pxと6pxの実端面を同じ素材へ揃える。活字の星と押面は全段階で固定し、評価範囲は版の密度、確定位置は内側の押縁で示す。余分な見せかけの数値や罫線は置かない。 */
export default function LetterpressScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="letterpress-score-rating" />;
}
