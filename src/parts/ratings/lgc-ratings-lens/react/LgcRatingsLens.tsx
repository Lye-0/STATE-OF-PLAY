'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as LgcRatingsLensProps };
/** 独立した透明レンズに星を浮かべる評価。 */
export default function LgcRatingsLens(props: RatingProps) {
  return <RatingView {...props} skin="lgc-ratings-lens" className={`lgc-root ${props.className??''}`} />;
}
