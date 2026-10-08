'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 丸い選択記号を廃止し、角形のエンボスへ統一。周囲の押印面だけが沈む。 */
const EmbossedDiscCheck=forwardRef<HTMLInputElement,CheckboxProps>(function EmbossedDiscCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-embossed-disc-check ${className}`}/>;});
export default EmbossedDiscCheck;
