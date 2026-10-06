'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ScheduleGridSkeletonProps };
/** 曜日の帯と七つの列を、予定表の読込み中の区画として示す。 */
export default function ScheduleGridSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="schedule-grid-skeleton" />;
}
