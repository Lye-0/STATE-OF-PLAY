'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as InspectionScoreRatingProps };
/** 星を印した実評価票が、一つの開いた読み取りゲートを貫通する評価。四辺を閉じる外盤と普通のキーを廃し、50pxから始まる44pxの後の受け、58pxから始まる28pxの前の読取材、両方の間を通る110pxの実票へ組む。星は票の上、16pxの斜めの自由端はゲートの下へ露出する。前材は紙を覆い、native星/押面は覆わない。各行のゲートは全票へ連続し、外箱に票を収めない。 */
export default function InspectionScoreRating(props: RatingProps) {
  return <RatingView {...props} skin="inspection-score-rating" />;
}
