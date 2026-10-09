'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ArchiveFileSkeletonProps };
/** 図版と説明を、独立した二つの浅い保存箱へ納める。片側に実図版、反対に人物・本文を置き、三資料は説明箱の上端の実仕切り索引にする。二つの箱の間には幅36pxの本当の空気が通り、端から28px内側の上下二つの64pxの布ヒンジだけがつなぐ。ヒンジは各箱の10pxの側壁の背へ差し込み、中央の連続した背や外周一枚の枠は作らない。狭幅では箱を上下へ開き、同じ二つの布ヒンジを水平に使う。 */
export default function ArchiveFileSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="archive-file-skeleton" />;
}
