'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as BlueprintScoreRatingProps };
/** 三つの折れた放射翼が、中央の実星の接合面へ収束する製図折片の評価。連続する壁と脚の型を廃し、長さの違う三枚の実翼とその間の本当の空隙へ再設計する。44pxの中央の接合面は全翼へ重なり、28pxの実星を固定した平面で読む。翼の面の密度で選択範囲を示し、確定した接合面だけの上端を濃くする。偽の目盛りや自転は加えず、nativeの当たりは116pxの位置を保つ。 */
export default function BlueprintScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="blueprint-score-rating" />;
}
