'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 読む紙の右の全高へ、36pxの折れた旗を一体で付けるチェック。小さい旗をチェックの脇から外し、紙の上下の縁と旗の根元を同じ端点へ接続する。記号と文字は紙の無地に固定し、旗は操作欄から離れた余白へ置く。 */
const MarginFlagCheck=forwardRef<HTMLInputElement,CheckboxProps>(function MarginFlagCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-margin-flag-check ${className}`}/>;});
export default MarginFlagCheck;
