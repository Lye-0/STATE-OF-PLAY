'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 確認面の下を、三段の薄い受けへ接続するチェック。元の下の支えを残し、ぼけた接地影を5pxずつ内側へ収まる三つの実断面へ揃える。受けの上面を確認欄の下4pxへ重ね、面が宙に浮かないようにする。 */
const LadderSeatCheck=forwardRef<HTMLInputElement,CheckboxProps>(function LadderSeatCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-ladder-seat-check ${className}`}/>;});
export default LadderSeatCheck;
