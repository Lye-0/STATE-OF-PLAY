'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 折り目と紙の厚みを感じる、温かい選択。 */
const PaperfoldCheck=forwardRef<HTMLInputElement,CheckboxProps>(function PaperfoldCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-paperfold-check ${className}`}/>;});
export default PaperfoldCheck;
