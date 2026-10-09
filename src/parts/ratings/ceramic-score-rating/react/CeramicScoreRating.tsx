'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as CeramicScoreRatingProps };
/** 一列全体を、一枚の大きく反る陶の自立面で読む評価。小さな丸上キーの反復を廃し、片側で58px/70pxへ大きく巻き込む一つの壁と、その下へ26px重なる52pxの広がる裾を形成する。星は壁の平らな読む面へ固定し、個別の台座や星箱を作らない。選択範囲は実星の塗り、確定位置は3pxの低い刻みで読み、複数行でも同じ一枚の陶面が全評価を支える。 */
export default function CeramicScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="ceramic-score-rating" />;
}
