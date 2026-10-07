'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 円形の印影を四角い台座に収める。 */
const EmbossedDiscCheck=forwardRef<HTMLInputElement,CheckboxProps>(function EmbossedDiscCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-embossed-disc-check ${className}`}/>;});
export default EmbossedDiscCheck;
