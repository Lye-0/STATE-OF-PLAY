'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as BlueprintCommandProps };
/** 実検索の横の作業面と、実候補の縦の図面を44pxの開口で分ける直角の検索台。96pxの紙の折口が横面へ12px入り、縦面の背へ12px重なる。実件数は左の独立した80pxの軸へ置く。大きい青い矩形の囲いを廃し、入力の平面と候補の平面の接合そのものが主形を作る。 */
export default function BlueprintCommand(props:CommandProps) {
 return <CommandView {...props} skin="blueprint-command" />;
}
