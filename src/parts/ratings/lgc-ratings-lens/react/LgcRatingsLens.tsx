'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as LgcRatingsLensProps };
/** 読みやすい、定番の五つ星。 */
export default function LgcRatingsLens(props: RatingProps) {
  return <RatingView {...props} skin="lgc-ratings-lens" className={`lgc-root ${props.className??''}`} />;
}
