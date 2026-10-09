'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as OpenBracketRatingProps };
/** 片側が開いた実金具に、星の読み札を差し込む評価。細い四隅の括弧を廃し、48pxのC形の支持、そこから札を12px覆う二つの前の保持爪、右へ張り出す64px高の本当の星札へ組む。金具の上と下には札との間の実空隙が残り、星は札の固定平面へ読む。選択範囲は札の密度、確定位置は札の上端で示す。RTLでも金具と爪を同時に鏡映し、実ラジオの全112pxの当たりと星の大きさは保つ。 */
export default function OpenBracketRating(props: RatingProps) {
  return <RatingView {...props} skin="open-bracket-rating" />;
}
