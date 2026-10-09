'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 刻みのある円盤の縁と、内側へ押された確認面を持つチェック。紙を押した凹みと放射状の刻印を区別し、チェックを中央の静かな面へ置く。 */
const EmbossedDiscCheck=forwardRef<HTMLInputElement,CheckboxProps>(function EmbossedDiscCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-embossed-disc-check ${className}`}/>;});
export default EmbossedDiscCheck;
