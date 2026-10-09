'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as SealScoreRatingProps };
/** 同じ一つの蝋の端面を持つ封印の評価。丸い封印と星の主形を保持し、細い二重線を5pxの上面/8pxの押した下面へ揃える。星の大きさとnativeラジオの64pxの当たりは全段階で固定し、選んだ範囲だけ蝋の面を濃くする。確定位置は縁の密度へ示し、hoverのプレビューは評価値へ書き込まない。最大10段階でもnative押面の幅44pxを確保し複数行へ並べる。 */
export default function SealScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="seal-score-rating" />;
}
