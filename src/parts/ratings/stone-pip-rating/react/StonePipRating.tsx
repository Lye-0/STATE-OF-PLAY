'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as StonePipRatingProps };
/** 石のアーチを五つ並べる評価入力。各アーチの脚を細くし、狭幅でも星の列を一目で読める。 */
export default function StonePipRating(props: RatingProps) {
  return <RatingView {...props} skin="stone-pip-rating" />;
}
