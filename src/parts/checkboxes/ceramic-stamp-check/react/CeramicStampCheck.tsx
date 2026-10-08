'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 非対称の柔らかい縁と薄い釉薬の切口を持つ、陶の確認印。元の丸い陶縁を保ち、ぼけた接地影を2pxの上と下の切口へ置き換える。チェックと混在状態は35pxの無地へ表示し、押しても陶の面と文字を縮めない。 */
const CeramicStampCheck=forwardRef<HTMLInputElement,CheckboxProps>(function CeramicStampCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-ceramic-stamp-check ${className}`}/>;});
export default CeramicStampCheck;
