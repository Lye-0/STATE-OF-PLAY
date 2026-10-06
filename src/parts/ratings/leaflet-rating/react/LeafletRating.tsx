'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as LeafletRatingProps };
/** 二枚の葉のような評価面が、選択時に軽く開く。 */
export default function LeafletRating(props: RatingProps) {
  return <RatingView {...props} skin="leaflet-rating" />;
}
