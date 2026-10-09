'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ControlConsoleSkeletonProps };
/** 離れた図版面を、一体の曲がる首で支える読出しコンソール。全周の面取り箱を廃し、200pxの実図版が72pxの本当の空隙の上へ立つ。幅72pxの首は図版下の厚みへ接し、人物と本文を読む別の台へ12px差し込む。三資料はその台の前面へ載り、上面14px・前端18pxの深さを持つ。架空の操作ノブは作らず、実図版・ログ・資料の関係だけで主形を作る。 */
export default function ControlConsoleSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="control-console-skeleton" />;
}
