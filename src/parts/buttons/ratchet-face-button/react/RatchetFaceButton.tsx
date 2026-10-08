'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 明るい押し面の下で、三つの銅の歯が銀青のレールへ噛み合う。支持柱と歯を別の素材に分け、処理中もラベルの背面は暗くならない。 */
const RatchetFaceButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function RatchetFaceButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-ratchet-face-button ${className}`}/>;
});
export default RatchetFaceButton;
