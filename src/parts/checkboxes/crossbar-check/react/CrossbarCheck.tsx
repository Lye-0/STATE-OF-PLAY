'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 交差していた支持材を、確認面の外の二つの対角へ整理するチェック。3pxの短い横棒と縦棒を角で接続し、中央へ斜めの線を通さない。読む面の枠は1pxに抑え、チェックと混在状態をはっきり一つずつ表示する。 */
const CrossbarCheck=forwardRef<HTMLInputElement,CheckboxProps>(function CrossbarCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-crossbar-check ${className}`}/>;});
export default CrossbarCheck;
