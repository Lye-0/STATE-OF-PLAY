'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as LgcRatingsMistProps };
/** 一枚の霧ガラスに星を刻む評価。 */
export default function LgcRatingsMist(props: RatingProps) {
  return <RatingView {...props} skin="lgc-ratings-mist" className={`lgc-root ${props.className??''}`} />;
}
