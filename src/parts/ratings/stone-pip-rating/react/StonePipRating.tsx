'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as StonePipRatingProps };
/** 星を彫った一枚の石壁を、開いた尖頭アーチで支える評価。個々の楕円石と受け、石の階段を使わず、122pxの石の列廊、各12pxの側柱、58pxの頂点から下へ抜ける実空隙へ組む。隣の石は上の同じ壁面と柱の面へ直接続き、星は空隙の上の平らな石面へ固定して読む。選択範囲だけ同じ石の密度が変わり、星の位置とnative122px押面は動かない。 */
export default function StonePipRating(props: RatingProps) {
  return <RatingView {...props} skin="stone-pip-rating" />;
}
