'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as FoldedScoreRatingProps };
/** 同じ上の綴じ材から、幅14pxの本当の返しで下がる紙票の評価。元の吊り札/下端の折れを保持し、上の線を8pxの材料へ、星の票への接続を30pxの返しへ揃える。返しは読む紙の上端へ入り、選択した紙も同じ5px/8pxの紙端を持つ。星とnativeラジオを揺らさず、10段階の複数行では各行が同じ8pxの綴じ材と実返しを持ち、上の紙票へ下の返しを誤って重ねない。確定位置の4pxの縁は全状態で余白を確保し、星の読む位置をずらさない。 */
export default function FoldedScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="folded-score-rating" />;
}
