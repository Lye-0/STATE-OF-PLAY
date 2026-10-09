'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as FileJacketContextProps };
/** 実対象名を幅全体の太い起点面へ置き、そこから84pxの支持面と実分類ごとの読む紙を幅56pxの斜めの接合で分岐させる。長い実対象名は広い起点面で折り返し、細い縦列にしない。分類数だけ実groupを作り、分類なしには見出しを作らず一枚の紙へ戻す。submenuの起点名は現在の実親へ切り替わる。下ポケットを廃し、実対象・分類・操作の情報の関係が仕分け面の形を決める。 */
export default function FileJacketContext(props:ContextProps) {
 return <ContextView {...props} skin="file-jacket-context" />;
}
