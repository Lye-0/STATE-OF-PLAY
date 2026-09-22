'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 独立した黒いキーが、選択で沈み込む。 */
const MagneticCheck=forwardRef<HTMLInputElement,CheckboxProps>(function MagneticCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-magnetic-check ${className}`}/>;});
export default MagneticCheck;
