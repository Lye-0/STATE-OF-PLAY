'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 薄い紙へ押した確認欄の型を、二つの細い小口で示すチェック。元の角形の押印面を残し、ぼけた緑の発光を除く。外の1pxの押型と内側の2pxの窪みを揃え、記号と任意の文章は無地へ固定する。 */
const EmbossedDiscCheck=forwardRef<HTMLInputElement,CheckboxProps>(function EmbossedDiscCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-embossed-disc-check ${className}`}/>;});
export default EmbossedDiscCheck;
