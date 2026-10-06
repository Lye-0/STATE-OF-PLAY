'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ConversationSkeletonProps };
/** 左右に分かれた短い会話の面を、安定した位置で待機表示する。 */
export default function ConversationSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="conversation-skeleton" />;
}
