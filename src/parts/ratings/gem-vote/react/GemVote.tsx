'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as GemVoteProps };
/** 傾いた多面体が起き上がり、選択した面だけに色が宿る。 */
export default function GemVote(props: RatingProps) {
  return <RatingView {...props} skin="gem-vote" />;
}
