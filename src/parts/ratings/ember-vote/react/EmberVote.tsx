'use client';
import React from 'react';
import {RatingView,type RatingProps} from '../../../../shared/signature/rating-view';
import '../styles.css';
export type { RatingProps as EmberVoteProps };
/** 選んだ段階まで、小さな炎が現れて温かな光を残す。 */
export default function EmberVote(props: RatingProps) {
  return <RatingView {...props} skin="ember-vote" />;
}
