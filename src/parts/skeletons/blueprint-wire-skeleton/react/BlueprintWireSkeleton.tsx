'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as BlueprintWireSkeletonProps };
/** 図面の線だけで構成を予告する。 */
export default function BlueprintWireSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="blueprint-wire-skeleton" />;
}
